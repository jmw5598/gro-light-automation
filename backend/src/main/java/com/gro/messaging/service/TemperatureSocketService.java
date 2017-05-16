package com.gro.messaging.service;

import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.TemperatureDTO;

@MessageEndpoint
public class TemperatureSocketService {
    
    @ServiceActivator(inputChannel="temperatureServiceChannel")
    public void process(Message<TemperatureDTO> message) {
        //publish temperature change to websocket topic to update angular 2
        System.out.println("updating temperature socket");
    }
    
}
