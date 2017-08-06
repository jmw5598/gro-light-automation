package com.gro.model.data.temperature;

import java.util.Date;

import com.gro.model.data.AbstractDataDTO;

public class TemperatureDTO extends AbstractDataDTO {
    
    private Double temperature;
    
    public TemperatureDTO() {}

    public TemperatureDTO(Date timestamp, Double temperature) {
        super(timestamp);
        this.temperature = temperature;
    }
    
    public TemperatureDTO(Date timestamp, Double temperature, Integer componentId) {
        super(timestamp, componentId);
        this.temperature = temperature;
    }

    public Double getTemperature() {
        return temperature;
    }
    
    public void setTemperature(Double temperature) {
        this.temperature = temperature;
    }
    
}
