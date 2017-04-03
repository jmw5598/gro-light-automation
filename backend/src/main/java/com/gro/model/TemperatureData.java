package com.gro.model;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
public class TemperatureData extends AbstractRPiComponentData {
    
    @NotNull
    private Double temperature;
    
    @ManyToOne
    @NotNull
    private RPiComponent component;
    
    public TemperatureData() {}

    public Double getTemperature() {
        return temperature;
    }

    public void setTemperature(Double temperature) {
        this.temperature = temperature;
    }
    
    public RPiComponent getComponent() {
        return component;
    }
    
    public void setComponent(RPiComponent component) {
        this.component = component;
    }
    
}
