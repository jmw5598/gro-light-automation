package com.gro.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.integration.mqtt.support.MqttHeaders;
import org.springframework.integration.support.MessageBuilder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gro.messaging.gateway.MqttOutboundGateway;
import com.gro.model.InvalidRPiComponentTypeException;
import com.gro.model.InvalidRelayStateException;
import com.gro.model.RPiComponent;
import com.gro.model.RPiComponentNotFoundException;
import com.gro.model.RPiComponentType;
import com.gro.model.RelayState;
import com.gro.repository.RPiComponentRepository;

@RestController
@RequestMapping("/api/component")
public class RelayController {
    
    @Autowired
    private  MqttOutboundGateway gateway;
    
    @Autowired
    private RPiComponentRepository rPiComponentRepository;
    
    @Value("${exception.rpi-component-not-found}")
    private String componentNotFound;
    
    @Value("${exception.invalid-relay-state}")
    private String invalidRelayState;
    
    @Value("${exception.invalid-rpi-component-type}")
    private String invalidComponentType;
    
    
    @RequestMapping(value="/{id}/relay", method=RequestMethod.PUT)
    public void toggleRelay(
            @PathVariable Integer id,
            @RequestParam(name="state", required=true) String state) {
        
        RPiComponent component = this.validateRPiComponent(id);
        RelayState relayState = this.validateRelayState(state);
        
        if(component.getType() == RPiComponentType.RELAY) {
            gateway.send(
                MessageBuilder
                    .withPayload(component.getPin() + "," + relayState.toString())
                    .setHeader(MqttHeaders.TOPIC, "RELAYS.StatusChange")
                    .build());
        } else {
            throw new InvalidRPiComponentTypeException(invalidComponentType);
        }
    }
    
    
    private RPiComponent validateRPiComponent(Integer id) {
        RPiComponent component = rPiComponentRepository.findOne(id);
        if(component == null)
            throw new RPiComponentNotFoundException(componentNotFound);
        return component;
    }
    
    private RelayState validateRelayState(String state) {
        RelayState relayState = RelayState.from(state);
        if(relayState == null)
            throw new InvalidRelayStateException(invalidRelayState);
        return relayState;
    }
    
}
