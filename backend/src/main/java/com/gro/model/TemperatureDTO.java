package com.gro.model;

import java.util.Date;

public class TemperatureDTO {
    
    private Date timestamp;
    private Double temperature;
    
    public TemperatureDTO() {}

    public TemperatureDTO(Date timestamp, Double temperature) {
        this.timestamp = timestamp;
        this.temperature = temperature;
    }
    
    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public Double getTemperature() {
        return temperature;
    }

    public void setTemperature(Double temperature) {
        this.temperature = temperature;
    }
    
}
