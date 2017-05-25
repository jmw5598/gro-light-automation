package com.gro.messaging.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class TwilioTextMessageService implements TextMessageService {
    
    @Value("${twilio.account.sid}")
    private String sid;
    
    @Value("${twilio.account.auth_token}")
    private String authToken;
    
    @Value("${twilio.phone.inbound}")
    private String inbound;
    
    @Value("${twilio.phone.outbound}")
    private String outbound;
    
    @Override
    public void sendSms(String message) {
        Twilio.init(sid, authToken);
        Message sms = Message.creator(
                new PhoneNumber(outbound),
                new PhoneNumber(inbound),
                message
                ).create();
    }

    @Override
    public void sendMms(String message) {
        
    }

}
