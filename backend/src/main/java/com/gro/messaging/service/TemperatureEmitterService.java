package com.gro.messaging.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.TemperatureDTO;
import com.gro.web.service.TemperatureDataService;

@MessageEndpoint
public class TemperatureEmitterService {
    
    @Autowired
    private TemperatureDataService temperatureDataService;
    
    @ServiceActivator(inputChannel="temperatureServiceChannel")
    public void process(Message<TemperatureDTO> message) {
        temperatureDataService.emit(message.getPayload());
    }
    
}
