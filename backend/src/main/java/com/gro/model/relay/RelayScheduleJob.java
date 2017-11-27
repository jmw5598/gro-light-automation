package com.gro.model.relay;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import com.gro.model.AbstractScheduleJob;

@Entity
public class RelayScheduleJob extends AbstractScheduleJob {
    
    @NotNull
    @Enumerated(EnumType.STRING)
    private RelayState state;
    
    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    private Date time;
    
    public RelayScheduleJob() {}

    public RelayState getState() {
        return state;
    }

    public void setState(RelayState state) {
        this.state = state;
    }
    
    public Date getTime() {
        return this.time;
    }
    
    public void setTime(Date time) {
        this.time = time;
    }
    
    
    
}
