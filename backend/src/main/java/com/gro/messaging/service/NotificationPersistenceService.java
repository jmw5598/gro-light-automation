package com.gro.messaging.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.notification.Notification;
import com.gro.repository.NotificationRepository;

@MessageEndpoint
public class NotificationPersistenceService {
    
    @Autowired
    private NotificationRepository notificationRepository;
    
    @ServiceActivator(inputChannel="notificationServiceChannel")
    public void process(Message<Notification> message) {
        this.notificationRepository.save(message.getPayload());
    }

}
