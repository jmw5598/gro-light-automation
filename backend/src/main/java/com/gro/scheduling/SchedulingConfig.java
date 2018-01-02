package com.gro.scheduling;

import java.io.IOException;

import javax.annotation.PostConstruct;

import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.impl.StdSchedulerFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.scheduling.quartz.SpringBeanJobFactory;

import com.gro.scheduling.AutowiringSpringBeanJobFactory;

@Configuration
public class SchedulingConfig {
    
    @Autowired
    private ApplicationContext applicationContext;
    
    Logger logger = LoggerFactory.getLogger(getClass());
  
    
    @PostConstruct
    public void init() {
        logger.info("Hello world from Quartz...");
    }
    
    @Bean
    public SpringBeanJobFactory springBeanJobFactory() {
        AutowiringSpringBeanJobFactory jobFactory = new AutowiringSpringBeanJobFactory();
        jobFactory.setApplicationContext(applicationContext);
        return jobFactory;
    }
    
    @Bean
    public Scheduler scheduler() throws SchedulerException, IOException {
        StdSchedulerFactory factory = new StdSchedulerFactory();
        factory.initialize(new ClassPathResource("quartz.properties").getInputStream());
        Scheduler scheduler = factory.getScheduler();
        scheduler.setJobFactory(springBeanJobFactory());
        scheduler.start();
        return scheduler;
    }
    
    @Bean
    public RelayJobFactory relayJobFactory() {
        return new RelayJobFactory();
    }

}
