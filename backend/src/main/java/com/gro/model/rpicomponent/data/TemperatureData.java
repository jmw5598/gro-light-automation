package com.gro.model.rpicomponent.data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import com.gro.model.rpicomponent.AbstractRPiComponentData;
import com.gro.model.rpicomponent.component.TemperatureSensor;

@Entity
public class TemperatureData extends AbstractRPiComponentData {
    
    @NotNull
    private Double temperature;
    
    @ManyToOne
    private TemperatureSensor component;
    
    public TemperatureData() {}

    public Double getTemperature() {
        return temperature;
    }

    public void setTemperature(Double temperature) {
        this.temperature = temperature;
    }

    public TemperatureSensor getComponent() {
        return component;
    }

    public void setComponent(TemperatureSensor component) {
        this.component = component;
    }
    
}
