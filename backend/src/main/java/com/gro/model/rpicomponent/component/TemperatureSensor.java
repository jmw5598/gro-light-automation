package com.gro.model.rpicomponent.component;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

import com.gro.model.rpicomponent.AbstractRPiComponent;
import com.gro.model.rpicomponent.RPiComponentType;
import com.gro.model.rpicomponent.preferences.TemperatureSensorPreferences;

@Entity
public class TemperatureSensor extends AbstractRPiComponent {
    private static final long serialVersionUID = -2861056769929307256L;
    
    @OneToOne(cascade=CascadeType.ALL)
    private TemperatureSensorPreferences preferences;
    
    public TemperatureSensor() {
        this.type = RPiComponentType.TEMPERATURE;
    }

    public TemperatureSensorPreferences getPreferences() {
        return preferences;
    }

    public void setPreferences(TemperatureSensorPreferences preferences) {
        this.preferences = preferences;
    }
    
}
