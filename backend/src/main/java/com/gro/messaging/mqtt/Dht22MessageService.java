package com.gro.messaging.mqtt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.sensor.Sensor;
import com.gro.model.sensor.SensorData;
import com.gro.model.sensor.TemperatureHumidityDTO;
import com.gro.repository.SensorDataRepository;
import com.gro.repository.SensorRepository;

@MessageEndpoint
public class Dht22MessageService {
    
    @Autowired
    private SensorRepository sensorRepository;
    
    @Autowired
    private SensorDataRepository sensorDataRepository;
    
    @ServiceActivator(inputChannel="dht22MessageServiceChannel")
    public void temperatureHandler(Message<TemperatureHumidityDTO> message) {
        
        TemperatureHumidityDTO data = message.getPayload();
        Sensor sensor = sensorRepository.findOne(data.getSensorId());
        SensorData sensorData = new SensorData();
        sensorData.setSensor(sensor);
        sensorData.setTemperature(data.getTemperature());
        sensorData.setHumidity(data.getHumidity());
        sensorDataRepository.save(sensorData);
    }
    
}
