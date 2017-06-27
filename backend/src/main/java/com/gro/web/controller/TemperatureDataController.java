package com.gro.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gro.model.RPiComponent;
import com.gro.model.RPiComponentNotFoundException;
import com.gro.model.TemperatureData;
import com.gro.repository.RPiComponentRepository;
import com.gro.repository.TemperatureDataRepository;

@RestController
@RequestMapping(value="/api/component")
public class TemperatureDataController {
    
    @Autowired
    private TemperatureDataRepository temperatureDataRepository;
    
    @Autowired
    private RPiComponentRepository rPiComponentRepository;
    
    @Value("${exception.rpi-component-not-found}")
    private String componentNotFoundException;
    
    
    @RequestMapping(value="/{id}/temperature", method=RequestMethod.GET)
    public Page<TemperatureData> getTemperatureDataPage(
            @PathVariable("id") Integer id,
            @PageableDefault(sort={"timestamp"}, page=0, size=10) Pageable pageable) {
        
        RPiComponent component = validateComponent(id);
        return temperatureDataRepository.findAllByComponent(component, pageable);
    }
    
    
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value="/{id}/temperature", method=RequestMethod.POST)
    public void postTemperatureData(@PathVariable("id") Integer id,
                                    @RequestBody TemperatureData data) {
        
        RPiComponent component = validateComponent(id);
        data.setComponent(component);
        temperatureDataRepository.save(data);
    }
    
    
    @RequestMapping(value="/{id}/temperature/monthly/average", method=RequestMethod.GET)
    public Page<TemperatureData> getTemperatureDataMonthlyAverage(
            @PathVariable("id") Integer id,
            @PageableDefault(sort={"timestamp"}, page=0, size=10) Pageable pageable) {
        
        RPiComponent component = validateComponent(id);
        return temperatureDataRepository.findMonthlyAverageByComponent(component, pageable);
    }
    
    
    @RequestMapping(value="/{id}/temperature/daily/average", method=RequestMethod.GET)
    public Page<TemperatureData> getTemperatureDataDailyAverage(
            @PathVariable("id") Integer id,
            @PageableDefault(sort={"timestamp"}, page=0, size=10) Pageable pageable) {
        
        RPiComponent component = validateComponent(id);
        return temperatureDataRepository.findDailyAverageByComponent(component, pageable);
    }
    
    
    @RequestMapping(value="/{id}/temperature/daily/high", method=RequestMethod.GET)
    public Page<TemperatureData> getTemperatureDataDailyHigh(
            @PathVariable("id") Integer id,
            @PageableDefault(sort={"timestamp"}, page=0, size=10) Pageable pageable) {
        
        RPiComponent component = validateComponent(id);
        return temperatureDataRepository.findDailyHighByComponent(component, pageable);
    }
    
    
    @RequestMapping(value="/{id}/temperature/daily/low", method=RequestMethod.GET)
    public Page<TemperatureData> getTemperatureDataDailyLow(
            @PathVariable("id") Integer id,
            @PageableDefault(sort={"timestamp"}, page=0, size=10) Pageable pageable) {
        
        RPiComponent component = validateComponent(id);
        return temperatureDataRepository.findDailyLowByComponent(component, pageable);
    }
    
    
    @RequestMapping(value="/{id}/temperature/hourly/average", method=RequestMethod.GET)
    public Page<TemperatureData> getTemperatureDataHourlyAverage(
            @PathVariable("id") Integer id,
            @PageableDefault(sort={"timestamp"}, page=0, size=10) Pageable pageable) {
        
        RPiComponent component = validateComponent(id);
        return temperatureDataRepository.findHourlyAverageByComponent(component, pageable);
    }
    
    
    @RequestMapping(value="/{id}/temperature/hourly/high", method=RequestMethod.GET)
    public Page<TemperatureData> getTemperatureDataHourlyHigh (
            @PathVariable("id") Integer id,
            @PageableDefault(sort={"timestamp"}, page=0, size=10) Pageable pageable) {
        
        RPiComponent component = validateComponent(id);
        return temperatureDataRepository.findHourlyHighByComponent(component, pageable);
    }

    
    @RequestMapping(value="/{id}/temperature/hourly/low", method=RequestMethod.GET)
    public Page<TemperatureData> getTemperatureDataHourlyLow(
            @PathVariable("id") Integer id,
            @PageableDefault(sort={"timestamp"}, page=0, size=10) Pageable pageable) {
        
        RPiComponent component = validateComponent(id);
        return temperatureDataRepository.findHourlyLowByComponent(component, pageable);
        
    }
    
    private RPiComponent validateComponent(Integer id) {
        RPiComponent component = rPiComponentRepository.findOne(id);
        if(component == null)
            throw new RPiComponentNotFoundException(componentNotFoundException);
        else
            return component;
    }
    
}
