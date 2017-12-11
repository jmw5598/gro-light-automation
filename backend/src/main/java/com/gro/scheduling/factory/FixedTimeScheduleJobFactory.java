package com.gro.scheduling.factory;

import java.util.HashMap;
import java.util.Map;

import org.quartz.CronScheduleBuilder;
import org.quartz.JobBuilder;
import org.quartz.JobDataMap;
import org.quartz.JobDetail;
import org.quartz.JobKey;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;

import com.gro.scheduling.FixedTimeJob;
import com.gro.scheduling.FixedTimeScheduleJob;

public class FixedTimeScheduleJobFactory<T extends FixedTimeScheduleJob, D> implements ScheduleJobFactory <T, D>{

    @Override
    public JobDetail getJobDetail(T t, D d) {
        Map<String, Object> jobData = new HashMap<>();
        jobData.put("schedule", t);
        jobData.put("data", d);
        return JobBuilder.newJob()
            .ofType(FixedTimeJob.class)
            .storeDurably()
            .withIdentity(JobKey.jobKey(String.valueOf(t.getId())))
            .usingJobData(new JobDataMap(jobData))
            .build();
    }

    @Override
    public Trigger getTrigger(JobDetail jobDetail, T t) {
        return TriggerBuilder.newTrigger()
            .forJob(jobDetail)
            .withIdentity(String.valueOf(t.getId()), t.getComponent().getType().toString())
            .withSchedule(
                CronScheduleBuilder.dailyAtHourAndMinute(t.getTime().getHours(), t.getTime().getMinutes())
            ).build();
    }

}
