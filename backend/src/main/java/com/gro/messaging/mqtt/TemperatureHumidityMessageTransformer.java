package com.gro.messaging.mqtt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.Transformer;
import org.springframework.integration.support.json.Jackson2JsonObjectMapper;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;

import com.gro.model.sensor.TemperatureHumidityDTO;

@MessageEndpoint
public class TemperatureHumidityMessageTransformer {
    
    @Autowired
    private Jackson2JsonObjectMapper jsonMapper;
    
    @Transformer(inputChannel="temperatureHumidityTransformerChannel", 
                 outputChannel="temperatureHumidityServiceChannel")
    public Message<TemperatureHumidityDTO> transform(Message<String> message) throws Exception {
        String payload = message.getPayload();
        TemperatureHumidityDTO data = jsonMapper.fromJson(payload, TemperatureHumidityDTO.class);
        return MessageBuilder.createMessage(data, message.getHeaders());
    }
    
}
