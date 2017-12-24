package com.gro.messaging.transformer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.Transformer;
import org.springframework.integration.support.json.Jackson2JsonObjectMapper;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;

import com.gro.model.rpicomponent.data.MoistureData;

@MessageEndpoint
public class MoistureMessageTransformer {

    @Autowired
    private Jackson2JsonObjectMapper jackson2JsonObjectMapper;
    
    @Transformer(inputChannel="moistureTransformerChannel",
            outputChannel="moistureServiceChannel")
    public Message<MoistureData> transform(Message<String> message) throws Exception {
        String payload = message.getPayload();
        MoistureData data = jackson2JsonObjectMapper.fromJson(payload, MoistureData.class);
        return MessageBuilder.createMessage(data, message.getHeaders());        
    }
    
}
