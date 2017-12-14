package com.gro.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gro.model.rpicomponent.component.MoistureSensor;
import com.gro.repository.MoistureSensorRepository;

@RestController
@RequestMapping("/api/component/moisture")
public class MoistureSensorController extends AbstractRestController<MoistureSensor, Integer> {
    
    @Autowired
    public MoistureSensorController(MoistureSensorRepository repository) {
        super(repository);
    } 

}
