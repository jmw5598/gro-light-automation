package com.gro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gro.model.sensor.Sensor;
import com.gro.model.sensor.SensorData;
import com.gro.model.sensor.SensorNotFoundException;
import com.gro.repository.SensorDataRepository;
import com.gro.repository.SensorRepository;


@RestController
@RequestMapping("/sensor")
public class SensorController {
    
    @Autowired
    private SensorRepository sensorRepository;
    
    @Autowired
    private SensorDataRepository sensorDataRepository;
    
    
    @RequestMapping(method=RequestMethod.POST)
    public void create(@RequestBody Sensor sensor) {
        System.out.println("sensor: " + sensor);
        sensorRepository.save(sensor);
    }
    
    @RequestMapping(method=RequestMethod.GET)
    public List<Sensor> getAll() {
        return sensorRepository.findAll();
    }
    
    @RequestMapping(path="/{id}", method=RequestMethod.GET)
    public Sensor getSensor(@PathVariable("id") int id) {
        Sensor sensor = sensorRepository.findOne(id);
        if(sensor == null) 
            throw new SensorNotFoundException("Sensor " + id + " was not found");
        return sensorRepository.findOne(id);
    }
    
    @RequestMapping(path="/{id}/data", method=RequestMethod.GET)
    public List<SensorData> getAllSensorData(@PathVariable("id") int id) {
        Sensor sensor = sensorRepository.findOne(id);
        if(sensor == null) 
            throw new SensorNotFoundException("Sensor " + id + " was not found");
        return sensorDataRepository.findAllBySensor(sensor);
    }
    
    @RequestMapping(path="/{id}/data", method=RequestMethod.POST)
    public void saveSensorData(@PathVariable("id") int id, @RequestBody SensorData data) {
        Sensor sensor = sensorRepository.findOne(id);
        if(sensor == null) 
            throw new SensorNotFoundException("Sensor " + id + " was not found");
        data.setSensor(sensor);
        sensorDataRepository.save(data);
    }
    
}
