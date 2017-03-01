package com.gro.messaging.mqtt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.sensor.Sensor;
import com.gro.model.sensor.TemperatureHumidityData;
import com.gro.model.sensor.TemperatureHumidityDTO;
import com.gro.repository.TemperatureHumidityDataRepository;
import com.gro.repository.SensorRepository;

@MessageEndpoint
public class TemperatureHumidityMessageService {
    
    @Autowired
    private SensorRepository sensorRepository;
    
    @Autowired
    private TemperatureHumidityDataRepository sensorDataRepository;
    
    @ServiceActivator(inputChannel="temperatureHumidityServiceChannel")
    public void process(Message<TemperatureHumidityDTO> message) {
        
        TemperatureHumidityDTO data = message.getPayload();
        Sensor sensor = sensorRepository.findOne(data.getSensorId());
        TemperatureHumidityData sensorData = new TemperatureHumidityData();
        sensorData.setSensor(sensor);
        sensorData.setTemperature(data.getTemperature());
        sensorData.setHumidity(data.getHumidity());
        sensorDataRepository.save(sensorData);
    }
    
}
