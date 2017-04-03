package com.gro.messaging.mqtt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.RPiComponent;
import com.gro.model.TemperatureData;
import com.gro.repository.RPiComponentRepository;
import com.gro.repository.TemperatureDataRepository;

@MessageEndpoint
public class TemperatureMessageService {
    
    @Autowired
    private RPiComponentRepository rPiComponentRepository;
    
    @Autowired
    private TemperatureDataRepository temperatureDataRepository;
    
    @ServiceActivator(inputChannel="temperatureHumidityServiceChannel")
    public void process(Message<TemperatureData> message) {
        
        // THIS NEED FIXING
        TemperatureData data = message.getPayload();
        RPiComponent component = rPiComponentRepository.findOne(data.getComponent().getId());
        data.setComponent(component);
        temperatureDataRepository.save(data);
    }
    
}
