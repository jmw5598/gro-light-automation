package com.gro.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gro.model.rpicomponent.RPiPin;
import com.gro.repository.RPiPinRepository;

@RestController
@RequestMapping("/api/rpipin")
public class RPiPinController {
    
    @Autowired
    private RPiPinRepository rPiPinRepository;
    
    @RequestMapping(method=RequestMethod.GET)
    public List<RPiPin> getAllPins() {
        return rPiPinRepository.findAll();
    }

}
