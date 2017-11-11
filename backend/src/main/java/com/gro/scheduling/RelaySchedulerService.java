package com.gro.scheduling;

import org.quartz.Scheduler;
import org.springframework.beans.factory.annotation.Autowired;

public class RelaySchedulerService implements SchedulerService {
    
    @Autowired
    private Scheduler scheduler;
    
    @Override
    public void startAll() {
        
    }

    @Override
    public void startById() {
        
    }

    @Override
    public void stopById() {
        
    }

    @Override
    public void removeById() {
        
    }

}
