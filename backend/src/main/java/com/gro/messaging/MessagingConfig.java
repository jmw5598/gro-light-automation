package com.gro.messaging;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.integration.channel.DirectChannel;
import org.springframework.integration.channel.PublishSubscribeChannel;
import org.springframework.integration.core.MessageProducer;
import org.springframework.integration.mqtt.core.DefaultMqttPahoClientFactory;
import org.springframework.integration.mqtt.core.MqttPahoClientFactory;
import org.springframework.integration.mqtt.inbound.MqttPahoMessageDrivenChannelAdapter;
import org.springframework.integration.mqtt.outbound.MqttPahoMessageHandler;
import org.springframework.integration.mqtt.support.DefaultPahoMessageConverter;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.MessageHandler;


@Configuration
public class MessagingConfig {
    
    @Value("${mqtt.url}")
    private String mqttUrl;
    
    @Value("${mqtt.username}")
    private String mqttUsername;
    
    @Value("${mqtt.password}")
    private String mqttPassword;
    
    @Bean
    public MqttPahoClientFactory mqttClientFactory() {    
        DefaultMqttPahoClientFactory factory = new DefaultMqttPahoClientFactory();
        factory.setServerURIs(mqttUrl);
        factory.setUserName(mqttUsername);
        factory.setPassword(mqttPassword);
        return factory;
    }
    
    @Bean
    public MessageProducer inbound() {
        MqttPahoMessageDrivenChannelAdapter adapter =
                new MqttPahoMessageDrivenChannelAdapter("testingMqtt", mqttClientFactory(), 
                        "TEMPERATURE", "HUMIDITY", "NOTIFICATION.Alert", "PROXIMITY.State", "RELAY.State", "MOISTURE.State");
        adapter.setCompletionTimeout(5000);
        adapter.setConverter(new DefaultPahoMessageConverter());
        adapter.setQos(2);
        adapter.setOutputChannel(mqttRouterChannel());
        return adapter;
    }
    
    @Bean
    @ServiceActivator(inputChannel="mqttOutboundChannel")
    public MessageHandler outbound() {
        MqttPahoMessageHandler handler = new MqttPahoMessageHandler("mqttPublisher", mqttClientFactory());
        handler.setAsync(true);
        handler.setDefaultTopic("TEST");
        return handler;
    }
    
    @Bean
    public MessageChannel mqttRouterChannel() {
        return new DirectChannel();
    }
    
    /* TEMPERATURE : CHANNEL BETWEEN TRANSFORMER AND SERVICES */
    @Bean
    public MessageChannel temperatureServiceChannel() {
        return new PublishSubscribeChannel();
    }
    
    /* TEMPERATURE : CHANNEL BETWEEN ROUTER AND TRANSFORMER */
    @Bean
    public MessageChannel temperatureTransformerChannel() {
        return new DirectChannel();
    }
    
    /* HUMIDITY : CHANNEL BETWEEN TRANSFORMER AND SERVICES */
    @Bean
    public MessageChannel humidityServiceChannel() {
        return new PublishSubscribeChannel();
    }
    
    /* HUMIDITY : CHANNEL BETWEEN ROUTER AND TRANSFORMER */
    @Bean
    public MessageChannel humidityTransformerChannel() {
        return new DirectChannel();
    }
    
    /* NOTIFICATION : CHANNEL BETWEEN ROUTER AND NOTIFICATION TRANSFORMER */
    @Bean
    public MessageChannel notificationTransformerChannel() {
        return new DirectChannel();
    }
    
    /* NOTIFICATION : CHANNEL BETWEEN TRANSFORMER AND PERSISTENCE SERVICE */
    @Bean
    public MessageChannel notificationPersistenceChannel() {
        return new DirectChannel();
    }
    
    /* NOTIFICATION : CHANNEL BETWEEN TRANSFORMER AND PERSISTENCE SERVICE */
    @Bean
    public MessageChannel notificationNotifyChannel() {
        return new PublishSubscribeChannel();
    }
    
    
    
    
    /* PROXIMITY : CHANNEL BETWEEN TRANSFORMER AND STATE EMIITER SERVICE */
    @Bean
    public MessageChannel proximityMessageChannel() {
        return new DirectChannel();
    }
    
    /* PROXIMITY : CHANNEL BETWEEN ROUTER AND STATE TRANSFORMER */
    @Bean
    public MessageChannel proximityTransformerChannel() {
        return new DirectChannel();
    }
    
    /* MOISTURE : CHANNEL BETWEEN TRANSFORMER AND STATE EMIITER SERVICE */
    @Bean
    public MessageChannel moistureServiceChannel() {
        return new DirectChannel();
    }
    
    /* MOISTURE : CHANNEL BETWEEN ROUTER AND STATE TRANSFORMER */
    @Bean
    public MessageChannel moistureTransformerChannel() {
        return new DirectChannel();
    }
    
    /* RELAY : CHANNEL BETWEEN TRANSFORMER AND SERVICE */
    @Bean
    public MessageChannel relayEmitterChannel() {
        return new DirectChannel();
    }
    
    /* RELAY : CHANNEL BETWEEN ROUTER AND TRANSFORMER */
    @Bean
    public MessageChannel relayTransformerChannel() {
        return new DirectChannel();
    }
    
}
