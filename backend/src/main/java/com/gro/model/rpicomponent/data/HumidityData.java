package com.gro.model.rpicomponent.data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import com.gro.model.rpicomponent.AbstractRPiComponentData;
import com.gro.model.rpicomponent.component.HumiditySensor;

@Entity
public class HumidityData extends AbstractRPiComponentData {
    
    @NotNull
    public Double humidity;
    
    @ManyToOne
    private HumiditySensor component;
    
    public HumidityData() {}

    public Double getHumidity() {
        return humidity;
    }

    public void setHumidity(Double humidity) {
        this.humidity = humidity;
    }

    public HumiditySensor getComponent() {
        return component;
    }

    public void setComponent(HumiditySensor component) {
        this.component = component;
    }
    
}
