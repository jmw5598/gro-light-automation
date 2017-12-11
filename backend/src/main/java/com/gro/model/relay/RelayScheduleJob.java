package com.gro.model.relay;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;

import com.gro.model.FixedTimeScheduleJob;

@Entity
public class RelayScheduleJob extends FixedTimeScheduleJob {
    
    @NotNull
    @Enumerated(EnumType.STRING)
    private RelayState state;
    
    public RelayScheduleJob() {}

    public RelayState getState() {
        return state;
    }

    public void setState(RelayState state) {
        this.state = state;
    }   
    
}
