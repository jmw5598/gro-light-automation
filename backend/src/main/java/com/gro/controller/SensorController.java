package com.gro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gro.model.sensor.Sensor;
import com.gro.repository.SensorRepository;


@RestController
@RequestMapping("/sensor")
public class SensorController {
    
    @Autowired
    private SensorRepository sensorRepository;
    
    @RequestMapping(method=RequestMethod.POST)
    public void create(@RequestBody Sensor sensor) {
        System.out.println("sensor: " + sensor);
        sensorRepository.save(sensor);
    }
    
    @RequestMapping(method=RequestMethod.GET)
    public List<Sensor> getAll() {
        return sensorRepository.findAll();
    }
    
}
