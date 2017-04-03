package com.gro.model;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
public class HumidityData extends AbstractRPiComponentData {
    
    @NotNull
    public Double humidity;
    
    public HumidityData() {}

    public Double getHumidity() {
        return humidity;
    }

    public void setHumidity(Double humidity) {
        this.humidity = humidity;
    }
    
}
