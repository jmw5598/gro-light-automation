package com.gro.messaging.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.HumidityDTO;
import com.gro.web.service.HumidityDataService;

@MessageEndpoint
public class HumidityEmitterService {
    
    @Autowired
    private HumidityDataService humidityDataService;
    
    @ServiceActivator(inputChannel="humidityServiceChannel")
    public void process(Message<HumidityDTO> message) {
        humidityDataService.emit(message.getPayload());
    }
    
}
