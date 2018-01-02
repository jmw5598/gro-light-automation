package com.gro.scheduling;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.gro.model.relay.RelayScheduleJob;
import com.gro.model.rpicomponent.AbstractRPiComponent;
import com.gro.model.rpicomponent.data.RelayDTO;
import com.gro.model.rpicomponent.data.RelayState;
import com.gro.web.service.RelayService;

@Component
public class RelayJob implements Job {
    
    @Autowired
    private RelayService relayService;
    
    private Logger logger = LoggerFactory.getLogger(getClass());

    @Override
    public void execute(JobExecutionContext context) throws JobExecutionException {
        RelayScheduleJob job = (RelayScheduleJob) context.getJobDetail().getJobDataMap().get("schedule");
        RelayDTO relayDto = new RelayDTO(job.getComponent(), job.getState());
        try {
            relayService.toggle(relayDto);
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
    }

}
