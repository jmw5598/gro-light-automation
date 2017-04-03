package com.gro.messaging.mqtt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;

import com.gro.model.RPiComponent;
import com.gro.model.TemperatureData;
import com.gro.model.sensor.Sensor;
import com.gro.model.sensor.temperature_humidity.TemperatureHumidityDTO;
import com.gro.model.sensor.temperature_humidity.TemperatureHumidityData;
import com.gro.repository.TemperatureHumidityDataRepository;
import com.gro.repository.RPiComponentRepository;
import com.gro.repository.SensorRepository;

@MessageEndpoint
public class TemperatureHumidityMessageService {
    
    @Autowired
    private RPiComponentRepository rPiComponentRepository;
    
    @Autowired
    private TemperatureHumidityDataRepository sensorDataRepository;
    
    @ServiceActivator(inputChannel="temperatureHumidityServiceChannel")
    public void process(Message<TemperatureData> message) {
        
        TemperatureData data = message.getPayload();
        RPiComponent sensor = rPiComponentRepository.findOne(data.getSensorId());
        TemperatureData sensorData = new TemperatureData();
        sensorData.setSensor(sensor);
        sensorData.setTemperature(data.getTemperature());
        sensorData.setHumidity(data.getHumidity());
        sensorDataRepository.save(sensorData);
    }
    
}
