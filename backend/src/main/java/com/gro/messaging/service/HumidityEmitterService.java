package com.gro.messaging.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.rpicomponent.data.HumidityDTO;
import com.gro.web.service.ObjectSseEmitterService;

@MessageEndpoint
public class HumidityEmitterService {
    
    @Value("${sse.event.humidity}")
    private String eventName;
    
    @Autowired
    private ObjectSseEmitterService objectSseEmitterService;
    
    @ServiceActivator(inputChannel="humidityServiceChannel")
    public void process(Message<HumidityDTO> message) {
        Map<String, Object> obj = new HashMap<>();
        obj.put("event", eventName);
        obj.put("payload", message.getPayload());
        objectSseEmitterService.emit(obj);
    }
    
}
