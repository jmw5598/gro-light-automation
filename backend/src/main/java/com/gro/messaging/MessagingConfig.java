package com.gro.messaging;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.integration.channel.DirectChannel;
import org.springframework.integration.core.MessageProducer;
import org.springframework.integration.mqtt.core.DefaultMqttPahoClientFactory;
import org.springframework.integration.mqtt.core.MqttPahoClientFactory;
import org.springframework.integration.mqtt.inbound.MqttPahoMessageDrivenChannelAdapter;
import org.springframework.integration.mqtt.support.DefaultPahoMessageConverter;
import org.springframework.integration.support.json.Jackson2JsonObjectMapper;
import org.springframework.messaging.MessageChannel;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
public class MessagingConfig {
    
    @Bean
    public MessageChannel mqttRouterChannel() {
        return new DirectChannel();
    }
    
    /* TEMPERATURE : CHANNEL BETWEEN TRANSFORMER AND SERVICE */
    @Bean
    public MessageChannel temperatureServiceChannel() {
        return new DirectChannel();
    }
    
    /* TEMPERATURE : CHANNEL BETWEEN ROUTER AND TRANSFORMER */
    @Bean
    public MessageChannel temperatureTransformerChannel() {
        return new DirectChannel();
    }
    
    /* TEMPERATURE : CHANNEL BETWEEN TRANSFORMER AND SERVICE */
    @Bean
    public MessageChannel humidityServiceChannel() {
        return new DirectChannel();
    }
    
    /* TEMPERATURE : CHANNEL BETWEEN ROUTER AND TRANSFORMER */
    @Bean
    public MessageChannel humidityTransformerChannel() {
        return new DirectChannel();
    }
    
    /* PROXIMITY : CHANNEL BETWEEN TRANSFORMER AND SERVICE */
    @Bean
    public MessageChannel proximityServiceChannel() {
        return new DirectChannel();
    }
    
    /* PROXIMITY : CHANNEL BETWEEN ROUTER AND TRANSFORMER */
    @Bean
    public MessageChannel proximityTransformerChannel() {
        return new DirectChannel();
    }
    
    @Bean
    public MqttPahoClientFactory mqttClientFactory() {
        DefaultMqttPahoClientFactory factory = new DefaultMqttPahoClientFactory();
        factory.setServerURIs("tcp://192.168.1.7:1883");
        factory.setUserName("username");
        factory.setPassword("password");
        return factory;
    }
    
    @Bean
    public MessageProducer inbound() {
        MqttPahoMessageDrivenChannelAdapter adapter =
                new MqttPahoMessageDrivenChannelAdapter("testingMqtt", mqttClientFactory(), "TEMPERATURE", "HUMIDITY", "PROXIMITY");
        adapter.setCompletionTimeout(5000);
        adapter.setConverter(new DefaultPahoMessageConverter());
        adapter.setQos(1);
        adapter.setOutputChannel(mqttRouterChannel());
        return adapter;
    }
    
}
