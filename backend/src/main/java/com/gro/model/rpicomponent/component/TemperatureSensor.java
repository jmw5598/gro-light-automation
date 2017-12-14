package com.gro.model.rpicomponent.component;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import com.gro.model.rpicomponent.AbstractRPiComponent;

@Entity
@DiscriminatorValue("TEMPERATURE")
public class TemperatureSensor extends AbstractRPiComponent {
    private static final long serialVersionUID = -2861056769929307256L;
}
