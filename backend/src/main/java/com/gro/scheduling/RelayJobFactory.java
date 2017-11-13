package com.gro.scheduling;

import java.util.HashMap;
import java.util.Map;

import org.quartz.CronScheduleBuilder;
import org.quartz.DailyTimeIntervalScheduleBuilder;
import org.quartz.JobBuilder;
import org.quartz.JobDataMap;
import org.quartz.JobDetail;
import org.quartz.JobKey;
import org.quartz.TimeOfDay;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;

import com.gro.model.relay.RelayScheduleJob;

public class RelayJobFactory implements ScheduleJobFactory<RelayScheduleJob> {

    @Override
    public JobDetail getJobDetail(RelayScheduleJob schedule) {
        Map<String, Object> jobData = new HashMap<>();
        jobData.put("schedule", schedule);
        return JobBuilder.newJob()
            .ofType(RelayJob.class)
            .storeDurably()
            .withIdentity(JobKey.jobKey(String.valueOf(schedule.getId())))
            .usingJobData(new JobDataMap(jobData))
            .build();
    }

    @Override
    public Trigger getTrigger(JobDetail jobDetail, RelayScheduleJob schedule) {
        return TriggerBuilder.newTrigger()
            .forJob(jobDetail)
            .withIdentity(String.valueOf(schedule.getId()), schedule.getComponent().getType().toString())
            .withSchedule(
                CronScheduleBuilder.dailyAtHourAndMinute(schedule.getTime().getHours(), schedule.getTime().getMinutes())
             ).build();
    }
    
}
