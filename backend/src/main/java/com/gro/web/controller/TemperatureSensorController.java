package com.gro.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gro.model.rpicomponent.component.TemperatureSensor;
import com.gro.repository.rpicomponent.TemperatureSensorRepository;

@RestController
@RequestMapping("/api/component/temperature")
public class TemperatureSensorController extends AbstractRestController<TemperatureSensor, Integer> {
    
    @Autowired
    public TemperatureSensorController(TemperatureSensorRepository repository) {
        super(repository);
    }

}
