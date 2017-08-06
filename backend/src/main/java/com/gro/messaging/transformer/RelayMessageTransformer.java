package com.gro.messaging.transformer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.Transformer;
import org.springframework.integration.support.json.Jackson2JsonObjectMapper;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;

import com.gro.model.relay.RelayDTO;

@MessageEndpoint
public class RelayMessageTransformer {
    
    @Autowired
    private Jackson2JsonObjectMapper jackson2JsonObjectMapper;
    
    @Transformer(inputChannel="relayTransformerChannel",
                 outputChannel="relayEmitterChannel")
    public Message<RelayDTO> transform(Message<String> message) throws Exception {
        String payload = message.getPayload();
        RelayDTO data = jackson2JsonObjectMapper.fromJson(payload, RelayDTO.class);
        return MessageBuilder.createMessage(data, message.getHeaders());
    }
    
}
