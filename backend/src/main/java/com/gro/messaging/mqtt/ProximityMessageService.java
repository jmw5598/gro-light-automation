package com.gro.messaging.mqtt;

import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.sensor.proximity.ProximityDTO;

@MessageEndpoint
public class ProximityMessageService {
    
    @ServiceActivator(inputChannel="proximityServiceChannel")
    public void process(Message<ProximityDTO> message) {
        ProximityDTO data = message.getPayload();
        System.out.println("Proximity: " + data.getProximity());
    }
    
}
