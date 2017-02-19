package com.gro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gro.model.Pin;
import com.gro.repository.PinRepository;

@RestController
@RequestMapping("/pin")
public class PinController {
    
    @Autowired
    private PinRepository pinRepository;
    
    
    @RequestMapping(method=RequestMethod.GET)
    public List<Pin> getAll() {
        return pinRepository.findAll();
    }
    
    @RequestMapping(method=RequestMethod.POST)
    public void create(@RequestBody Pin pin) {
        System.out.println(pin.getAlias());
        pinRepository.save(pin);
    }
    
    @RequestMapping(path="/{id}", method=RequestMethod.GET)
    public Pin getPin(@PathVariable("id") int id) {
        return pinRepository.findOne(id);
    }
    
}
