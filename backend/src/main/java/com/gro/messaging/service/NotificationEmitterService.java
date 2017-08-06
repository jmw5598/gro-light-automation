package com.gro.messaging.service;

import java.util.Map;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.notification.Notification;
import com.gro.model.rpicomponent.RPiComponent;
import com.gro.repository.RPiComponentRepository;
import com.gro.web.service.ObjectSseEmitterService;

@MessageEndpoint
public class NotificationEmitterService {
    
    @Value("${sse.event.notification}")
    private String eventName;
    
    @Autowired
    private ObjectSseEmitterService objectSseEmitterService;
    
    @Autowired
    private RPiComponentRepository rPiComponentRepository;
    
    @ServiceActivator(inputChannel="notificationChannel")
    public void process(Message<Notification> message) {
        Notification notification = message.getPayload();
        RPiComponent component = rPiComponentRepository.findOne(notification.getComponent().getId());
        notification.setComponent(component);
        Map<String, Object> obj = new HashMap<>();
        obj.put("event", eventName);
        obj.put("payload", notification);
        objectSseEmitterService.emit(obj);
    }

}
