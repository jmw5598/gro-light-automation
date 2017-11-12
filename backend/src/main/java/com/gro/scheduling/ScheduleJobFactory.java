package com.gro.scheduling;

import org.quartz.JobDetail;
import org.quartz.Trigger;

public interface ScheduleJobFactory<T> {
    public JobDetail getJobDetail(T t);
    public Trigger getTrigger(JobDetail jobDetail, T t);
}
