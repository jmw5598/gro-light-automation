package com.gro.model.rpicomponent.data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import com.gro.model.rpicomponent.AbstractRPiComponentData;

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
