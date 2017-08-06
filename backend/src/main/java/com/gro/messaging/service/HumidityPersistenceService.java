package com.gro.messaging.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.data.humidity.HumidityDTO;
import com.gro.model.data.humidity.HumidityData;
import com.gro.model.rpicomponent.RPiComponent;
import com.gro.repository.HumidityDataRepository;
import com.gro.repository.RPiComponentRepository;

@MessageEndpoint
public class HumidityPersistenceService {
    
    @Autowired
    private RPiComponentRepository rPiComponentRepository;
    
    @Autowired
    private HumidityDataRepository humidityDataRepository;
    
    @ServiceActivator(inputChannel="humidityServiceChannel")
    public void process(Message<HumidityDTO> message) {
        
        HumidityDTO payload = message.getPayload();
        RPiComponent component = rPiComponentRepository.findOne(payload.getComponentId());
        if(component != null) {
            HumidityData data = new HumidityData();
            data.setHumidity(payload.getHumidity());
            data.setTimestamp(payload.getTimestamp());
            data.setComponent(component);
            humidityDataRepository.save(data);
        }
    }
    
}
