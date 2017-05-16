package com.gro.messaging.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.RPiComponent;
import com.gro.model.TemperatureDTO;
import com.gro.model.TemperatureData;
import com.gro.repository.RPiComponentRepository;
import com.gro.repository.TemperatureDataRepository;

@MessageEndpoint
public class TemperaturePersistenceService {
    
    @Autowired
    private RPiComponentRepository rPiComponentRepository;
    
    @Autowired
    private TemperatureDataRepository temperatureDataRepository;
    
    @ServiceActivator(inputChannel="temperatureServiceChannel")
    public void process(Message<TemperatureDTO> message) {
        
        TemperatureDTO payload = message.getPayload();
        RPiComponent component = rPiComponentRepository.findOne(payload.getComponentId());
        if(component != null) {
            TemperatureData data = new TemperatureData();
            data.setTemperature(payload.getTemperature());
            data.setTimestamp(payload.getTimestamp());
            data.setComponent(component);
            temperatureDataRepository.save(data);
        }
    }
    
}
