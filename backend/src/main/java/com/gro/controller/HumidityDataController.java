package com.gro.controller;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gro.model.HumidityData;
import com.gro.model.TemperatureData;

@RestController
public class HumidityDataController extends RPiComponentController {
    
    @RequestMapping(value="/{id}/humidity", method=RequestMethod.GET)
    public Page<HumidityData> getHumidityDataPage() {
        return null;
    }
    
    @RequestMapping(value="/{id}/humidity", method=RequestMethod.POST)
    public void postHumidityData(@RequestBody TemperatureData data) {
        
    }
    
    @RequestMapping(value="/{id}/humidity/monthlyAverage", method=RequestMethod.GET)
    public Page<TemperatureData> getHumidityDataMonthlyAverage() {
        return null;
    }
    
    @RequestMapping(value="/{id}/humidity/hourlyAverage", method=RequestMethod.GET)
    public Page<TemperatureData> getHumidityDataHourlyAverage() {
        return null;
    }
    
}
