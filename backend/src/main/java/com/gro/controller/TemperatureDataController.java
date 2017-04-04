package com.gro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
    
    @RequestMapping(value="/{id}/temperature", method=RequestMethod.GET)
    public Page<TemperatureData> getTemperatureDataPage(@PathVariable("id") Integer id) {
        return null;
    }
    
    
    @RequestMapping(value="/{id}/temperature", method=RequestMethod.POST)
    public void postTemperatureData(@PathVariable("id") Integer id,
                                    @RequestBody TemperatureData data) {
        RPiComponent component = rPiComponentRepository.findOne(id);
        if(component == null)
            throw new RPiComponentNotFoundException("Component not found");
        data.setComponent(component);
        temperatureDataRepository.save(data);
    }
    
    
    @RequestMapping(value="/{id}/temperature/monthlyAverage", method=RequestMethod.GET)
    public Page<TemperatureData> getTemperatureDataMonthlyAverage(
            @PathVariable("id") Integer id,
            @RequestParam(name="page", defaultValue="0") Integer page,
            @RequestParam(name="size", defaultValue="12") Integer size) {
        
        RPiComponent component = rPiComponentRepository.findOne(id);
        if(component == null)
            throw new RPiComponentNotFoundException("Component not found");
        return null;
    }
    
    @RequestMapping(value="/{id}/temperature/monthlyHighLow", method=RequestMethod.GET)
    public Page<TemperatureData> getTemperatureDataMonthlyHighLow(
            @PathVariable("id") Integer id,
            @RequestParam(name="page", defaultValue="0") Integer page,
            @RequestParam(name="size", defaultValue="12") Integer size) {
        
        RPiComponent component = rPiComponentRepository.findOne(id);
        if(component == null)
            throw new RPiComponentNotFoundException("Component not found");
        return null;
    }
    
    
    @RequestMapping(value="/{id}/temperature/dailyAverage", method=RequestMethod.GET)
    public Page<TemperatureData> getTemperatureDataDailyAverage(
            @PathVariable("id") Integer id,
            @RequestParam(name="page", defaultValue="0") Integer page,
            @RequestParam(name="size", defaultValue="12") Integer size) {
        
        RPiComponent component = rPiComponentRepository.findOne(id);
        if(component == null)
            throw new RPiComponentNotFoundException("Component not found");
        return null;
    }

    
    @RequestMapping(value="/{id}/temperature/dailyHighLow", method=RequestMethod.GET)
    public Page<TemperatureData> getTemperatureDataDailyHighLow(
            @PathVariable("id") Integer id,
            @RequestParam(name="page", defaultValue="0") Integer page,
            @RequestParam(name="size", defaultValue="31") Integer size) {
        
        RPiComponent component = rPiComponentRepository.findOne(id);
        if(component == null)
            throw new RPiComponentNotFoundException("Component not found");
        return null;
    }
    
    
    @RequestMapping(value="/{id}/temperature/hourlyAverage", method=RequestMethod.GET)
    public Page<TemperatureData> getTemperatureDataHourlyAverage(
            @PathVariable("id") Integer id,
            @RequestParam(name="page", defaultValue="0") Integer page,
            @RequestParam(name="size", defaultValue="24") Integer size) {
        
        RPiComponent component = rPiComponentRepository.findOne(id);
        if(component == null)
            throw new RPiComponentNotFoundException("Component not found");
        return null;
    }
    
    
    @RequestMapping(value="/{id}/temperature/hourlyHighLow", method=RequestMethod.GET)
    public Page<TemperatureData> getTemperatureDataHourlyHighLow(
            @PathVariable("id") Integer id,
            @RequestParam(name="page", defaultValue="0") Integer page,
            @RequestParam(name="size", defaultValue="24") Integer size) {
        
        RPiComponent component = rPiComponentRepository.findOne(id);
        if(component == null)
            throw new RPiComponentNotFoundException("Component not found");
        return null;
    }
    
}
