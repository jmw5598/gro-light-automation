package com.gro.messaging.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;

import com.gro.model.notification.Notification;
import com.gro.model.rpicomponent.RPiComponent;
import com.gro.repository.NotificationRepository;
import com.gro.repository.RPiComponentRepository;

@MessageEndpoint
public class NotificationPersistenceService {
    
    @Autowired
    private NotificationRepository notificationRepository;
    
    @Autowired
    private RPiComponentRepository rPiComponentRepository;
    
    @ServiceActivator(inputChannel="notificationPersistenceChannel",
                      outputChannel="notificationNotifyChannel")
    public Message<Notification> process(Message<Notification> message) {
        Notification notification = message.getPayload();
        RPiComponent component = rPiComponentRepository.findOne(notification.getComponent().getId());
        notification.setComponent(component);
        Notification result = this.notificationRepository.save(notification);
        return MessageBuilder.createMessage(result, message.getHeaders());
    }

}
