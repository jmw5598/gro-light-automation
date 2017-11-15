package com.gro.scheduling;

import org.quartz.JobDetail;
import org.quartz.JobKey;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.Trigger;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gro.model.relay.RelayScheduleJob;

@Service
public class RelaySchedulerService implements SchedulerService<RelayScheduleJob> {
    
    @Autowired
    private Scheduler scheduler;
    
    @Autowired
    private RelayJobFactory relayJobFactory;
    
    private Logger logger = LoggerFactory.getLogger(getClass());

    @Override
    public void addJob(RelayScheduleJob job) {
        try {
            JobDetail current = scheduler.getJobDetail(JobKey.jobKey(String.valueOf(job.getId())));
            if(current == null && job.isEnabled()) {
                JobDetail jobDetail = relayJobFactory.getJobDetail(job);
                Trigger trigger = relayJobFactory.getTrigger(jobDetail, job);
                scheduler.scheduleJob(jobDetail, trigger);
            } else {
                logger.debug("Job already exists or job is not enabled");
            }
        } catch(SchedulerException se) {
            logger.error(se.getMessage());
        }
    }

    @Override
    public void removeJob(RelayScheduleJob job) {
        try {
            JobDetail current = scheduler.getJobDetail(JobKey.jobKey(String.valueOf(job.getId())));
            if(current != null) {
                this.scheduler.deleteJob(JobKey.jobKey(String.valueOf(job.getId())));
            } else {
                logger.debug("Cannot delete non-existing job");
            }
        } catch (SchedulerException se) {
            logger.error(se.getMessage());
        }
    }

    @Override
    public void updateJob(RelayScheduleJob i) {
        //TODO: Implement the update functionality
    }

}
