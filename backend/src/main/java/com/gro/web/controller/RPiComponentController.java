package com.gro.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gro.model.InvalidRPiComponentTypeException;
import com.gro.model.relay.InvalidRelayStateException;
import com.gro.model.relay.RelayState;
import com.gro.model.rpicomponent.RPiComponent;
import com.gro.model.rpicomponent.RPiComponentNotFoundException;
import com.gro.model.rpicomponent.RPiComponentType;
import com.gro.repository.RPiComponentRepository;

@RestController
@RequestMapping(value="/api/component")
public class RPiComponentController {
    
    @Autowired
    private RPiComponentRepository rPiComponentRepository;
    
    @Value("${exception.rpi-component-not-found}")
    private String componentNotFoundException;
   
    @Value("${exception.invalid-rpi-component-type}")
    private String invalidComponentType;
    
    
    @RequestMapping(method=RequestMethod.GET)
    public List<RPiComponent> getAllComponents() {
        return rPiComponentRepository.findAll();
    }
    
    
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(method=RequestMethod.POST)
    public RPiComponent postOneComponent(@RequestBody RPiComponent component) {
        return rPiComponentRepository.save(component);
    }
    
    
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public RPiComponent getOneComponent(@PathVariable("id") Integer id) {
        return validateComponent(id);
    }
    
    
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public void updateOneComponent(@RequestBody RPiComponent component) {
        rPiComponentRepository.save(component);
    }
    
    
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public RPiComponent deleteOneComponent(@PathVariable Integer id) {
        RPiComponent component = validateComponent(id);
        rPiComponentRepository.delete(id);
        return component; //returns deleted component
    }
    
    
    @RequestMapping(value="/byType", method=RequestMethod.GET)
    public List<RPiComponent> getComponentsByType(@RequestParam(value="type", required=true) String type) {
        RPiComponentType componentType = validateComponentType(type);
        return rPiComponentRepository.findAllByType(componentType);
    }
    
    
    private RPiComponent validateComponent(Integer id) {
        RPiComponent component = rPiComponentRepository.findOne(id);
        if(component == null)
            throw new RPiComponentNotFoundException(componentNotFoundException);
        else
            return component;
    }
    
    private RPiComponentType validateComponentType(String type) {
        RPiComponentType temp = RPiComponentType.from(type);
        if(temp == null)
            throw new InvalidRPiComponentTypeException(invalidComponentType);
        return temp;
    }

}
