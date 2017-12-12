package com.gro.scheduling.model;

import java.util.Date;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

@Entity
@DiscriminatorValue("FIXED")
public class FixedTimeScheduleJob extends AbstractScheduleJob {
    
    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    private Date time;
    
    public FixedTimeScheduleJob() {}
    
    public Date getTime() {
        return this.time;
    }
    
    public void setTime(Date time) {
        this.time = time;
    }

}
