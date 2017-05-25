package com.gro.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.mqtt.support.MqttHeaders;
import org.springframework.integration.support.MessageBuilder;
import org.springframework.integration.support.json.Jackson2JsonObjectMapper;
import org.springframework.stereotype.Service;

import com.gro.messaging.gateway.MqttOutboundGateway;
import com.gro.model.RelayDTO;

@Service
public class RelayService extends AbstractSseEmitterService<RelayDTO> {
    
    @Autowired
    private Jackson2JsonObjectMapper jackson2JsonObjectMapper;
    
    @Autowired
    private  MqttOutboundGateway gateway;
    
    public void toggle(RelayDTO relay) throws Exception {
        gateway.send(
            MessageBuilder
                .withPayload(jackson2JsonObjectMapper.toJson(relay))
                .setHeader(MqttHeaders.TOPIC, "RELAYS.StatusChange")
                .build()
        );
    }    
}
