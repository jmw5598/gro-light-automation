package com.gro.messaging.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.RelayDTO;
import com.gro.web.service.RelayService;

@MessageEndpoint
public class RelayEmitterService {
    
    @Autowired
    private RelayService relayService;
    
    @ServiceActivator(inputChannel="relayEmitterChannel")
    public void process(Message<RelayDTO> message) {
        relayService.emit(message.getPayload());
    }
    
}
