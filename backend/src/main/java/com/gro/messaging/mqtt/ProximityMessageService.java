package com.gro.messaging.mqtt;

import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.ProximityData;

@MessageEndpoint
public class ProximityMessageService {
    
    @ServiceActivator(inputChannel="proximityServiceChannel")
    public void process(Message<ProximityData> message) {
        ProximityData data = message.getPayload();
        System.out.println("Proximity: " + data.getProximity());
    }
    
}
