package com.gro.model.rpicomponent.data;

import java.util.Date;

import com.gro.model.rpicomponent.AbstractDataDTO;

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
