package com.gro.messaging.transformer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.Transformer;
import org.springframework.integration.support.json.Jackson2JsonObjectMapper;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;

import com.gro.model.rpicomponent.data.TemperatureDTO;

@MessageEndpoint
public class TemperatureMessageTransformer {
    
    @Autowired
    private Jackson2JsonObjectMapper jackson2JsonObjectMapper;
    
    @Transformer(inputChannel="temperatureTransformerChannel", 
                 outputChannel="temperatureServiceChannel")
    public Message<TemperatureDTO> transform(Message<String> message) throws Exception {
        String payload = message.getPayload();
        TemperatureDTO data = jackson2JsonObjectMapper.fromJson(payload, TemperatureDTO.class);
        return MessageBuilder.createMessage(data, message.getHeaders());
    }
    
}
