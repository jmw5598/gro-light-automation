package com.gro.model.rpicomponent.component;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import com.gro.model.rpicomponent.AbstractRPiComponent;

@Entity
@DiscriminatorValue("RELAY")
public class Relay extends AbstractRPiComponent {
    private static final long serialVersionUID = 7384389994862545570L;
}
