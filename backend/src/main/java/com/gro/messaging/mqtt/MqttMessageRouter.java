package com.gro.messaging.mqtt;

import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.Router;
import org.springframework.messaging.handler.annotation.Header;

@MessageEndpoint
public class MqttMessageRouter {
    
    @Router(inputChannel="mqttRouterChannel")
    public String route(@Header("mqtt_topic") String topic) {
        String route = null;
        switch(topic) {
            case ("/temp"):
                route = "dht22MessageTransformerChannel";
                break;
            // add more cases for other topics
        }
        return route;
    }

}
