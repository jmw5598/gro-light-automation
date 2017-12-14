package com.gro.model.rpicomponent.component;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import com.gro.model.rpicomponent.AbstractRPiComponent;

@Entity
@DiscriminatorValue("MOISTURE")
public class MoistureSensor extends AbstractRPiComponent {
    private static final long serialVersionUID = -8458254453273797900L;
}
