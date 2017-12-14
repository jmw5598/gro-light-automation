package com.gro.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gro.repository.FixedTimeScheduleRepository;
import com.gro.repository.IntervalScheduleRepository;
import com.gro.repository.ScheduleRepository;
import com.gro.scheduling.model.AbstractScheduleJob;
import com.gro.scheduling.model.FixedTimeScheduleJob;
import com.gro.scheduling.model.IntervalScheduleJob;

@RestController
@RequestMapping("/api/schedule")
public class ScheduleController {
    
    @Autowired
    private ScheduleRepository scheduleRepository;
    
    @Autowired
    private FixedTimeScheduleRepository fixedTimeScheduleRepository;
    
    @Autowired
    private IntervalScheduleRepository intervalScheduleRepository;
    
    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(method=RequestMethod.GET)
    public List<AbstractScheduleJob> getAllScheduleJob() {
        return scheduleRepository.findAll();
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(value="/fixed", method=RequestMethod.GET)
    public List<FixedTimeScheduleJob> getAllFixedSchedules() {
        return fixedTimeScheduleRepository.findAll();
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(value="/fixed", method=RequestMethod.POST)
    public FixedTimeScheduleJob postFixedTimeSchedule(@RequestBody FixedTimeScheduleJob schedule) {
        return null;
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(value="/interval", method=RequestMethod.GET)
    public List<IntervalScheduleJob> getAllIntervalSchedules() {
        return intervalScheduleRepository.findAll();
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(value="/interval", method=RequestMethod.POST)
    public IntervalScheduleJob postIntervalScheduleJob(@RequestBody IntervalScheduleJob schedule) {
        return null;
    }

}
