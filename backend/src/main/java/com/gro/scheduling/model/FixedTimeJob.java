package com.gro.scheduling.model;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.beans.factory.annotation.Autowired;

import com.gro.scheduling.adapter.ScheduleJobExecutionAdapter;

public class FixedTimeJob implements Job {
    
    @Autowired
    private ScheduleJobExecutionAdapter adapter;

    @Override
    public void execute(JobExecutionContext context) throws JobExecutionException {
        adapter.execute(context);
    }

}
