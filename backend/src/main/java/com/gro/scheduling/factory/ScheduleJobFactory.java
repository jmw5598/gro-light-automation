package com.gro.scheduling.factory;

import org.quartz.JobDetail;
import org.quartz.Trigger;

public interface ScheduleJobFactory<T, D> {
    public JobDetail getJobDetail(T t, D d);
    public Trigger getTrigger(JobDetail jobDetail, T t);
}
