package com.gro.model.rpicomponent.component;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import com.gro.model.rpicomponent.AbstractRPiComponent;

@Entity
@DiscriminatorValue("TEMPERATURE_HUMIDITY")
public class TemperatureHumiditySensor extends AbstractRPiComponent {
    private static final long serialVersionUID = -6282911908687688492L;
}
