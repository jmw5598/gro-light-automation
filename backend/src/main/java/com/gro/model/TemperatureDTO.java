package com.gro.model;

import java.util.Date;

public class TemperatureDTO extends AbstractDataDTO {
    
    private Double temperature;

    public TemperatureDTO(Date timestamp, Double temperature) {
        super(timestamp);
        this.temperature = temperature;
    }

    public Double getTemperature() {
        return temperature;
    }
    
}
