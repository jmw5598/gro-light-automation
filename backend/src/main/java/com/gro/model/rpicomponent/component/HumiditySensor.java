package com.gro.model.rpicomponent.component;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import com.gro.model.rpicomponent.AbstractRPiComponent;

@Entity
@DiscriminatorValue("HUMIDITY")
public class HumiditySensor extends AbstractRPiComponent {
    private static final long serialVersionUID = -1697372017855638391L;
}
