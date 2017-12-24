package com.gro.messaging.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.notification.Notification;
import com.gro.repository.rpicomponent.RPiComponentRepository;

@MessageEndpoint
public class NotificationSmsService {
    
    @Autowired
    private TextMessageService textMessageService;
    
    @Autowired
    private RPiComponentRepository rPiComponentRepository;
    
    @ServiceActivator(inputChannel="notificationNotifyChannel")
    public void process(Message<Notification> message) {
        System.out.println("NOTIFICATION : Sensing SMS");
        // construct more meaningful message with Notification class is complete
        //textMessageService.sendSms(message.getPayload().getMessage());
        
    }
    
}
