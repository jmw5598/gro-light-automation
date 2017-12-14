package com.gro.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gro.model.rpicomponent.exception.RPiPinNotFoundException;
import com.gro.model.rpipin.RPiPin;
import com.gro.repository.RPiPinRepository;

@RestController
@RequestMapping("/api/rpipin")
public class RPiPinController {
    
    @Autowired
    private RPiPinRepository rPiPinRepository;
    
    @Value("${exception.pin-not-found}")
    private String pinNotFound;
    
    @RequestMapping(method=RequestMethod.GET)
    public List<RPiPin> getAllPins() {
        return rPiPinRepository.findAll();
    }
    
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public RPiPin getPinById(@PathVariable("id") Integer id) {
        return validateRPiPin(id);
    }
    
    private RPiPin validateRPiPin(Integer id) {
        RPiPin pin = rPiPinRepository.findOne(id);
        if(pin == null)
            throw new RPiPinNotFoundException(pinNotFound);
        else
            return pin;
    }

}
