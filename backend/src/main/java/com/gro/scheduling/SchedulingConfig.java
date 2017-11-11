package com.gro.scheduling;

import java.io.IOException;

import javax.annotation.PostConstruct;

import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.JobKey;
import org.quartz.Scheduler;
import org.quartz.SimpleScheduleBuilder;
import org.quartz.SchedulerException;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;
import org.quartz.TriggerKey;
import org.quartz.impl.StdSchedulerFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

@Configuration
public class SchedulingConfig {
    
    // Setup Quartz scheduler
    // Pull in scheduled jobs from db and start the ones needed.??
    Logger logger = LoggerFactory.getLogger(getClass());
  
    
    @PostConstruct
    public void init() {
        logger.info("Hello world from Quartz...");
    }
    
    @Bean
    public Scheduler scheduler(Trigger trigger, JobDetail job) throws SchedulerException, IOException {
        
        StdSchedulerFactory factory = new StdSchedulerFactory();
        factory.initialize(new ClassPathResource("quartz.properties").getInputStream());
        Scheduler scheduler = factory.getScheduler();
        scheduler.scheduleJob(job, trigger);
        scheduler.start();
        return scheduler;
        
    }
    
    // temporary jobdetail
    @Bean
    public JobDetail jobDetail() {
        return JobBuilder.newJob()
            .ofType(RelayJob.class)
            .storeDurably()
            .withIdentity(JobKey.jobKey("Qrtz_Job_Detail"))
            .withDescription("Invoke Sample Job service...")
            .build();
    }
    
    // temporary trigger
    @Bean
    public Trigger trigger(JobDetail job) {
        int frequencyInSec = 10;
        logger.info("Configuring trigger to fire ever {} seconds", frequencyInSec);
        return TriggerBuilder.newTrigger()
            .forJob(job)
            .withIdentity(TriggerKey.triggerKey("Qrtz_Trigger"))
            .withDescription("Sample trigger")
            .withSchedule(
                SimpleScheduleBuilder.simpleSchedule()
                    .withIntervalInSeconds(frequencyInSec)
                    .repeatForever()
            ).build();
    }

}
