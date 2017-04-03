package com.gro.messaging.mqtt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.Transformer;
import org.springframework.integration.support.json.Jackson2JsonObjectMapper;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;

import com.gro.model.HumidityData;

@MessageEndpoint
public class HumidityMessageTransformer {
    
    @Autowired
    private Jackson2JsonObjectMapper jackson2JsonObjectMapper;
    
    @Transformer(inputChannel="humidityTransformerChannel", 
                 outputChannel="humidityServiceChannel")
    public Message<HumidityData> transform(Message<String> message) throws Exception {
        String payload = message.getPayload();
        HumidityData data = jackson2JsonObjectMapper.fromJson(payload, HumidityData.class);
        return MessageBuilder.createMessage(data, message.getHeaders());
    }
    
}
