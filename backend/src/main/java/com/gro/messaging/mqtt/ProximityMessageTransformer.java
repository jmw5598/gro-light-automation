package com.gro.messaging.mqtt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.Transformer;
import org.springframework.integration.support.json.Jackson2JsonObjectMapper;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;

import com.gro.model.sensor.ProximityDTO;

@MessageEndpoint
public class ProximityMessageTransformer {
    
    @Autowired
    private Jackson2JsonObjectMapper jsonMapper;
    
    @Transformer(inputChannel="proximityTransformerChannel",
                 outputChannel="proximityServiceChannel")
    public Message<ProximityDTO> transform(Message<String> message) throws Exception {
        String payload = message.getPayload();
        ProximityDTO data = jsonMapper.fromJson(payload, ProximityDTO.class);
        return MessageBuilder.createMessage(data, message.getHeaders());
    }
    
}
