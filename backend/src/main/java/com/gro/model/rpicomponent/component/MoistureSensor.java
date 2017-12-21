package com.gro.model.rpicomponent.component;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

import com.gro.model.rpicomponent.AbstractRPiComponent;
import com.gro.model.rpicomponent.preferences.MoistureSensorPreferences;

@Entity
public class MoistureSensor extends AbstractRPiComponent {
    private static final long serialVersionUID = -8458254453273797900L;
    
    @OneToOne(cascade=CascadeType.ALL)
    private MoistureSensorPreferences preferences;
    
    public MoistureSensor() {}

    public MoistureSensorPreferences getPreferences() {
        return preferences;
    }

    public void setPreferences(MoistureSensorPreferences preferences) {
        this.preferences = preferences;
    }
        
}
