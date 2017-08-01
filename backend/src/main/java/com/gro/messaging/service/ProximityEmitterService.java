package com.gro.messaging.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.ProximityDTO;
import com.gro.web.service.ObjectSseEmitterService;

@MessageEndpoint
public class ProximityEmitterService {
    
    @Value("${sse.event.proximity}")
    private String eventName;
    
    @Autowired
    private ObjectSseEmitterService objectSseEmitterService;
    
    @ServiceActivator(inputChannel="proximityServiceChannel")
    public void process(Message<ProximityDTO> message) {
        Map<String, Object> obj = new HashMap<>();
        obj.put("event", eventName);
        obj.put("payload", message.getPayload());
        objectSseEmitterService.emit(obj);
    }
}
