package com.gro.messaging.service;

import java.util.Map;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.notification.Notification;
import com.gro.web.service.ObjectSseEmitterService;

@MessageEndpoint
public class NotificationEmitterService {
    
    @Value("${sse.event.notification}")
    private String eventName;
    
    @Autowired
    private ObjectSseEmitterService objectSseEmitterService;
    
    @ServiceActivator(inputChannel="notificationChannel")
    public void process(Message<Notification> message) {
        Map<String, Object> obj = new HashMap<>();
        obj.put("event", eventName);
        obj.put("payload", message.getPayload());
        objectSseEmitterService.emit(obj);
    }

}
