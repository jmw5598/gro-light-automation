package com.gro.messaging.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.data.temperature.TemperatureDTO;
import com.gro.web.service.ObjectSseEmitterService;

@MessageEndpoint
public class TemperatureEmitterService {
    
    @Value("${sse.event.temperature}")
    private String eventName;
    
    @Autowired
    private ObjectSseEmitterService objectSseEmitterService;
    
    @ServiceActivator(inputChannel="temperatureServiceChannel")
    public void process(Message<TemperatureDTO> message) {
        Map<String, Object> obj = new HashMap<>();
        obj.put("event", eventName);
        obj.put("payload", message.getPayload());
        objectSseEmitterService.emit(obj);
    }
    
}
