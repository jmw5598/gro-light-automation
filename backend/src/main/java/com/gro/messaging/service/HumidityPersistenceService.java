package com.gro.messaging.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.rpicomponent.AbstractRPiComponent;
import com.gro.model.rpicomponent.data.HumidityDTO;
import com.gro.model.rpicomponent.data.HumidityData;
import com.gro.repository.data.HumidityDataRepository;
import com.gro.repository.rpicomponent.RPiComponentRepository;

@MessageEndpoint
public class HumidityPersistenceService {
    
    @Autowired
    private RPiComponentRepository rPiComponentRepository;
    
    @Autowired
    private HumidityDataRepository humidityDataRepository;
    
    @ServiceActivator(inputChannel="humidityServiceChannel")
    public void process(Message<HumidityDTO> message) {
        
        HumidityDTO payload = message.getPayload();
        AbstractRPiComponent component = rPiComponentRepository.findOne(payload.getComponentId());
        if(component != null) {
            HumidityData data = new HumidityData();
            data.setHumidity(payload.getHumidity());
            data.setTimestamp(payload.getTimestamp());
            data.setComponent(component);
            humidityDataRepository.save(data);
        }
    }
    
}
