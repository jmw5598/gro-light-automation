package com.gro.scheduling.adapter;

import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.stereotype.Component;

@Component
public class ScheduleJobExecutionAdapter implements JobExecutionAdapter {

    public void execute(JobExecutionContext context) throws JobExecutionException {
        
    }
    
}
