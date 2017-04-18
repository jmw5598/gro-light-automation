package com.gro.messaging.service;

public interface TextMessageService {
    
    void sendSms(String message);
    void sendMms(String message);
    
}
