package com.gro.messaging.service;

import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.HumidityDTO;

@MessageEndpoint
public class HumiditySocketService {
    
    @ServiceActivator(inputChannel="humidityServiceChannel")
    public void process(Message<HumidityDTO> message) {
        //publish humidity change to websocket topic to update angular 2
        System.out.println("updating humidity socket");
    }
    
}
