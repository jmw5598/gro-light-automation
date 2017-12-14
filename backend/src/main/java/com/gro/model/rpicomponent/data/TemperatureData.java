package com.gro.model.data.temperature;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import com.gro.model.data.AbstractRPiComponentData;

@Entity
public class TemperatureData extends AbstractRPiComponentData {
    
    @NotNull
    private Double temperature;
    
    public TemperatureData() {}

    public Double getTemperature() {
        return temperature;
    }

    public void setTemperature(Double temperature) {
        this.temperature = temperature;
    }
    
}
