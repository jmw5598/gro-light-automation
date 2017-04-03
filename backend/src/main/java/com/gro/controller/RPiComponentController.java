package com.gro.controller;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gro.model.RPiComponent;

@RestController
@RequestMapping(value="/api/component")
public class RPiComponentController {
    
    @RequestMapping(method=RequestMethod.GET)
    public List<RPiComponent> getAllComponents() {
        return null;
    }
    
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(method=RequestMethod.POST)
    public void postOneComponent(@RequestBody RPiComponent component) {
        //save new component / possibly return component after save.
    }
    
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public RPiComponent getOneComponent(@PathVariable("id") Integer id) {
        return null;
    }
    
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public void updateOneComponent(@RequestBody RPiComponent component) {
        //update component information
    }
    
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public void deleteOneComponent(@RequestBody RPiComponent component) {
        //delete component
    }
    
    
    
    
}
