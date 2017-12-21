package com.gro.model.rpicomponent.component;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

import com.gro.model.rpicomponent.AbstractRPiComponent;
import com.gro.model.rpicomponent.preferences.TemperatureHumiditySensorPreferences;

@Entity
public class TemperatureHumiditySensor extends AbstractRPiComponent {
    private static final long serialVersionUID = -6282911908687688492L;
    
    @OneToOne(cascade=CascadeType.ALL)
    private TemperatureHumiditySensorPreferences preferences;
    
    public TemperatureHumiditySensor() {}

    public TemperatureHumiditySensorPreferences getPreferences() {
        return preferences;
    }

    public void setPreferences(TemperatureHumiditySensorPreferences preferences) {
        this.preferences = preferences;
    }
    
}
