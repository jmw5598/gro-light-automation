package com.gro.messaging.mqtt;

import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.Router;
import org.springframework.messaging.handler.annotation.Header;

import com.gro.model.sensor.SensorType;

@MessageEndpoint
public class MqttMessageRouter {
    
    @Router(inputChannel="mqttRouterChannel")
    public String route(@Header("mqtt_topic") String topic) {
        String route = null;
        SensorType type = SensorType.valueOf(topic);
        
        switch(type) {
            case TEMPERATURE:
                route = "temperatureTransformerChannel";
                break;
            case HUMIDITY:
                route = "humidityTransformerChannel";
                break;
            case TEMPERATURE_HUMIDITY:
                route = "temperatureHumidityTransformerChannel";
                break;
            case PROXIMITY:
                route = "proximityTransformerChannel";
                break;
        }
        return route;
    }

}
