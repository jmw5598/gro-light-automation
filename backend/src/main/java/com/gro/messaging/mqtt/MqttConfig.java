package com.gro.messaging.mqtt;

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
public class MqttConfig {
    
    @Bean
    public MessageChannel mqttRouterChannel() {
        return new DirectChannel();
    }
    
    /* TEMP HUMIDITY : CHANNEL BETWEEN TRANSFORMER AND SERVICE */
    @Bean
    public MessageChannel temperatureHumidityServiceChannel() {
        return new DirectChannel();
    }
    
    /* TEMP HUMIDITY : CHANNEL BETWEEN ROUTER AND TRANSFORMER */
    @Bean
    public MessageChannel temperatureHumidityTransformerChannel() {
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
    
    
    
    //WIRE UP PROXIMITY MESSAGING
    
    @Bean
    public Jackson2JsonObjectMapper jsonMapper() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(JsonParser.Feature.ALLOW_COMMENTS, true);
        return new Jackson2JsonObjectMapper(mapper);
    }
    
    
    @Bean
    public MqttPahoClientFactory mqttClientFactory() {
        DefaultMqttPahoClientFactory factory = new DefaultMqttPahoClientFactory();
        factory.setServerURIs("tcp://192.168.1.16:1883");
        factory.setUserName("username");
        factory.setPassword("password");
        return factory;
    }
    
    @Bean
    public MessageProducer inbound() {
        MqttPahoMessageDrivenChannelAdapter adapter =
                new MqttPahoMessageDrivenChannelAdapter("testingMqtt", mqttClientFactory(), "TEMPERATURE_HUMIDITY", "PROXIMITY");
        adapter.setCompletionTimeout(5000);
        adapter.setConverter(new DefaultPahoMessageConverter());
        adapter.setQos(1);
        adapter.setOutputChannel(mqttRouterChannel());
        return adapter;
    }
    
}
