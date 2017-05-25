package com.gro.messaging.gateway;

import org.springframework.integration.annotation.MessagingGateway;
import org.springframework.messaging.Message;

@MessagingGateway(defaultRequestChannel="mqttOutboundChannel")
public interface MqttOutboundGateway {
    void send(Message<String> message);
}
