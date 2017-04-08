package com.gro.model;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
public class HumidityData extends AbstractRPiComponentData {
    
    @NotNull
    public Double humidity;
    
    @ManyToOne
    @NotNull
    private RPiComponent component;
    
    public HumidityData() {}

    public Double getHumidity() {
        return humidity;
    }

    public void setHumidity(Double humidity) {
        this.humidity = humidity;
    }
    
    public RPiComponent getComponent() {
        return component;
    }
    
    public void setComponent(RPiComponent component) {
        this.component = component;
    }
    
}
