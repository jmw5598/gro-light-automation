package com.gro.scheduling.adapter;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

public interface JobExecutionAdapter extends Job{
    void execute(JobExecutionContext context) throws JobExecutionException;
 }
