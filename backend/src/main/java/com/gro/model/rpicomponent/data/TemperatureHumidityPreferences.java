package com.gro.model.data;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;

import com.gro.model.AbstractInputPreferences;
import com.gro.model.data.temperature.TemperatureUnit;

@Entity
public class TemperatureHumidityPreferences extends AbstractInputPreferences {

    @Enumerated(EnumType.STRING)
    @NotNull
    private TemperatureUnit temperatureUnit = TemperatureUnit.CELSIUS;

    public TemperatureUnit getTemperatureUnit() {
        return temperatureUnit;
    }

    public void setTemperatureUnit(TemperatureUnit temperatureUnit) {
        this.temperatureUnit = temperatureUnit;
    }
    
}
