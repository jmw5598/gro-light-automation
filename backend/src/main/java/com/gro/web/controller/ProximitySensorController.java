package com.gro.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gro.model.rpicomponent.component.ProximitySensor;
import com.gro.repository.rpicomponent.ProximitySensorRepository;

@RestController
@RequestMapping("/api/component/proximity")
public class ProximitySensorController extends AbstractRestController<ProximitySensor, Integer> {
    
    @Autowired
    public ProximitySensorController(ProximitySensorRepository repository) {
        super(repository);
    }
    
}
