package com.gro.messaging.transformer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.Transformer;
import org.springframework.integration.support.json.Jackson2JsonObjectMapper;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;

import com.gro.model.ProximityData;

@MessageEndpoint
public class ProximityMessageTransformer {
    
    @Autowired
    private Jackson2JsonObjectMapper jackson2JsonObjectMapper;
    
    @Transformer(inputChannel="proximityTransformerChannel",
                 outputChannel="proximityServiceChannel")
    public Message<String> transform(Message<String> message) throws Exception {
        // TEMP : just send string message
        return MessageBuilder.createMessage(message.getPayload(), message.getHeaders());
    }
    
}
