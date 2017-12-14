package com.gro.model.rpicomponent.component;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import com.gro.model.rpicomponent.AbstractRPiComponent;

@Entity
@DiscriminatorValue("PROXIMITY")
public class ProximitySensor extends AbstractRPiComponent {
    private static final long serialVersionUID = -4988765402801140717L;
}
