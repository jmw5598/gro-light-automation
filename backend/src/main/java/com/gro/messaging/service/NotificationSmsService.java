package com.gro.messaging.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.Notification;
import com.gro.repository.RPiComponentRepository;

@MessageEndpoint
public class NotificationSmsService {
    
    @Autowired
    private TextMessageService textMessageService;
    
    @Autowired
    private RPiComponentRepository rPiComponentRepository;
    
    @ServiceActivator(inputChannel="notificationChannel")
    public void process(Message<Notification> message) {
        // construct more meaningful message with Notification class is complete
        //textMessageService.sendSms(message.getPayload().getMessage());
        
    }
    
}
