package com.gro.model.rpicomponent.preferences;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;

import com.gro.model.rpicomponent.AbstractSensorPreferences;

@Entity
public class TemperatureHumiditySensorPreferences extends AbstractSensorPreferences {

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
