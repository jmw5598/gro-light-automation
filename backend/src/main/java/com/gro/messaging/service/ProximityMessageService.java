package com.gro.messaging.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.repository.RPiComponentRepository;

@MessageEndpoint
public class ProximityMessageService {
    
    @Autowired
    private TextMessageService textMessageService;
    
    @Autowired
    private RPiComponentRepository rPiComponentRepository;
    
    @ServiceActivator(inputChannel="proximityServiceChannel")
    public void process(Message<String> message) {
        
        textMessageService.sendSms(message.getPayload());
        
    }
    
}
