package com.gro.messaging.mqtt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.HumidityData;
import com.gro.model.RPiComponent;
import com.gro.repository.HumidityDataRepository;
import com.gro.repository.RPiComponentRepository;

@MessageEndpoint
public class HumidityMessageService {
    
    @Autowired
    private RPiComponentRepository rPiComponentRepository;
    
    @Autowired
    private HumidityDataRepository humidityDataRepository;
    
    @ServiceActivator(inputChannel="temperatureHumidityServiceChannel")
    public void process(Message<HumidityData> message) {
        HumidityData data = message.getPayload();
        RPiComponent component = rPiComponentRepository.findOne(data.getComponent().getId());
        data.setComponent(component);
        humidityDataRepository.save(data);
    }
    
}
