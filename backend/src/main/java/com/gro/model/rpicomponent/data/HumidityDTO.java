package com.gro.model.rpicomponent.data;

import java.util.Date;

import com.gro.model.rpicomponent.AbstractDataDTO;

public class HumidityDTO extends AbstractDataDTO {

    private Double humidity;
    
    public HumidityDTO() {}
    
    public HumidityDTO(Date timestamp, Double humidity) {
        super(timestamp);
        this.humidity = humidity;
    }
    
    public HumidityDTO(Date timestamp, Double humidity, Integer componentId) {
        super(timestamp, componentId);
        this.humidity = humidity;
    }
    
    public Double getHumidity() {
        return humidity;
    }
    
    public void setHumidity(Double humidity) {
        this.humidity = humidity;
    }
    
}
