package com.gro.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gro.model.InvalidRPiComponentTypeException;
import com.gro.model.relay.InvalidRelayStateException;
import com.gro.model.relay.RelayDTO;
import com.gro.model.relay.RelayState;
import com.gro.model.rpicomponent.RPiComponent;
import com.gro.model.rpicomponent.RPiComponentNotFoundException;
import com.gro.model.rpicomponent.RPiComponentType;
import com.gro.repository.RPiComponentRepository;
import com.gro.web.service.RelayService;

@RestController
@RequestMapping("/api/component")
public class RelayController {
    
    @Autowired
    private RPiComponentRepository rPiComponentRepository;
    
    @Autowired
    private RelayService relayService;
    
    @Value("${exception.rpi-component-not-found}")
    private String componentNotFound;
    
    @Value("${exception.invalid-relay-state}")
    private String invalidRelayState;
    
    @Value("${exception.invalid-rpi-component-type}")
    private String invalidComponentType;
    
    
    @RequestMapping(value="/{id}/relay", method=RequestMethod.PUT)
    public void toggleRelay(
            @PathVariable Integer id,
            @RequestParam(name="state", required=true) String state) throws Exception {
        
        RPiComponent component = this.validateRPiComponent(id);
        RelayState relayState = this.validateRelayState(state);
        RelayDTO relay = new RelayDTO(component, relayState);
        relayService.toggle(relay);
        
    }
    
    @RequestMapping(value="/{id}/relay/poll", method=RequestMethod.GET)
    public void pollRelay(@PathVariable("id") Integer id) throws Exception {
        RPiComponent component = this.validateRPiComponent(id);
        RelayState relayState = null;
        RelayDTO relay = new RelayDTO(component, relayState);
        relayService.poll(relay);
    }
    
    private RPiComponent validateRPiComponent(Integer id) {
        RPiComponent component = rPiComponentRepository.findOne(id);
        if(component == null)
            throw new RPiComponentNotFoundException(componentNotFound);
        if(component.getType() != RPiComponentType.RELAY)
            throw new InvalidRPiComponentTypeException(invalidComponentType);
        return component;
    }
    
    private RelayState validateRelayState(String state) {
        RelayState relayState = RelayState.from(state);
        if(relayState == null)
            throw new InvalidRelayStateException(invalidRelayState);
        return relayState;
    }
    
}
