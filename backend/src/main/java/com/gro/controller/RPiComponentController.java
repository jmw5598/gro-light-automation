package com.gro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gro.model.RPiComponent;
import com.gro.repository.RPiComponentRepository;

@RestController
@RequestMapping(value="/api/component")
public class RPiComponentController {
    
    @Autowired
    private RPiComponentRepository rPiComponentRepository;
    
    @RequestMapping(method=RequestMethod.GET)
    public List<RPiComponent> getAllComponents() {
        return rPiComponentRepository.findAll();
    }
    
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(method=RequestMethod.POST)
    public void postOneComponent(@RequestBody RPiComponent component) {
        rPiComponentRepository.save(component);
    }
    
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public RPiComponent getOneComponent(@PathVariable("id") Integer id) {
        return rPiComponentRepository.findOne(id);
    }
    
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public void updateOneComponent(@RequestBody RPiComponent component) {
        rPiComponentRepository.save(component);
    }
    
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public void deleteOneComponent(@RequestBody RPiComponent component) {
        rPiComponentRepository.delete(component);
    }
    
    
    
    
}
