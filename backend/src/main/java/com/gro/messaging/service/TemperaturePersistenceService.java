package com.gro.messaging.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.rpicomponent.AbstractRPiComponent;
import com.gro.model.rpicomponent.data.TemperatureDTO;
import com.gro.model.rpicomponent.data.TemperatureData;
import com.gro.repository.data.TemperatureDataRepository;
import com.gro.repository.rpicomponent.RPiComponentRepository;

@MessageEndpoint
public class TemperaturePersistenceService {
    
    @Autowired
    private RPiComponentRepository rPiComponentRepository;
    
    @Autowired
    private TemperatureDataRepository temperatureDataRepository;
    
    @ServiceActivator(inputChannel="temperatureServiceChannel")
    public void process(Message<TemperatureDTO> message) {
        
        TemperatureDTO payload = message.getPayload();
        AbstractRPiComponent component = rPiComponentRepository.findOne(payload.getComponentId());
//        if(component != null) {
//            TemperatureData data = new TemperatureData();
//            data.setTemperature(payload.getTemperature());
//            data.setTimestamp(payload.getTimestamp());
//            data.setComponent(component);
//            temperatureDataRepository.save(data);
//        }
    }
    
}
