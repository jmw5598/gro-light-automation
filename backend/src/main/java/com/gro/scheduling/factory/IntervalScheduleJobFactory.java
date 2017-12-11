package com.gro.scheduling.factory;

import java.util.HashMap;
import java.util.Map;

import org.quartz.JobBuilder;
import org.quartz.JobDataMap;
import org.quartz.JobDetail;
import org.quartz.JobKey;
import org.quartz.SimpleScheduleBuilder;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;

import com.gro.scheduling.model.FrequencyMetric;
import com.gro.scheduling.model.IntervalJob;
import com.gro.scheduling.model.IntervalScheduleJob;

public class IntervalScheduleJobFactory<T extends IntervalScheduleJob, D> implements ScheduleJobFactory<T, D> {

    public JobDetail getJobDetail(T t, D d) {
        Map<String, Object> jobData = new HashMap<>();
        jobData.put("schedule", t);
        jobData.put("data", d);
        return JobBuilder.newJob()
            .ofType(IntervalJob.class)
                .storeDurably()
                .withIdentity(JobKey.jobKey(String.valueOf(t.getId())))
                .usingJobData(new JobDataMap(jobData))
                .build();
    }

    public Trigger getTrigger(JobDetail jobDetail, T t) {
        Integer seconds = calculateSeconds(t);
        return TriggerBuilder.newTrigger()
            .forJob(jobDetail)
            .withIdentity(String.valueOf(t.getId()), t.getComponent().getType().toString())
            .withSchedule(
                SimpleScheduleBuilder.repeatSecondlyForever(seconds)
            ).build();
    }
    
    private Integer calculateSeconds(T t) {
        FrequencyMetric metric = t.getFrequencyMetric();
        Integer value = 2;
        switch(metric) {
            case SECONDS:
                value = t.getFrequency();
                break;
            case MINUTES:
                value = t.getFrequency() * 60;
                break;
            case HOURS:
                value = t.getFrequency() * 60 * 60;
            default:
                value = 2;
                break;
        }
        
        return value;
    }

}
