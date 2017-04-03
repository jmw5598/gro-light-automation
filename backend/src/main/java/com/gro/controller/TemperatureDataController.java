package com.gro.controller;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gro.model.TemperatureData;

@RestController
@RequestMapping(value="/api/component")
public class TemperatureDataController {
    
    /**
     * Need to figure out paging
     */
    
    @RequestMapping(value="/{id}/temperature", method=RequestMethod.GET)
    public Page<TemperatureData> getTemperatureDataPage(@PathVariable("id") Integer id) {
        return null;
    }
    
    @RequestMapping(value="/{id}/temperature", method=RequestMethod.POST)
    public void postTemperatureData(@RequestBody TemperatureData data) {
        
    }
    
    @RequestMapping(value="/{id}/temperature/monthlyAverage", method=RequestMethod.GET)
    public Page<TemperatureData> getTemperatureDataMonthlyAverage() {
        return null;
    }
    
    @RequestMapping(value="/{id}/temperature/hourlyAverage", method=RequestMethod.GET)
    public Page<TemperatureData> getTemperatureDataHourlyAverage() {
        return null;
    }
    
}
