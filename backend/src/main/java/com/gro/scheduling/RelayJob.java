package com.gro.scheduling;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.gro.web.service.RelayService;

@Component
public class RelayJob implements Job {
    
    @Autowired
    private RelayService relayService;

    @Override
    public void execute(JobExecutionContext context) throws JobExecutionException {
        System.out.println("executing relay job : toggling relay");
    }

}
