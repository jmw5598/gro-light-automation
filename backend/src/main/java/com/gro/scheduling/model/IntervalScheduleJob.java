package com.gro.scheduling.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;

@Entity
@DiscriminatorValue("INTERVAL")
public class IntervalScheduleJob extends AbstractScheduleJob {
    
    @NotNull
    private Integer frequency;
    
    @NotNull
    @Enumerated(EnumType.STRING)
    private FrequencyMetric metric;
    
    public IntervalScheduleJob() {}
    
    public Integer getFrequency() {
        return frequency;
    }
    
    public void setFrequency(Integer frequency) {
        this.frequency = frequency;
    }
    
    public FrequencyMetric getFrequencyMetric() {
        return metric;
    }
    
    public void setFrequencyMetric(FrequencyMetric metric) {
        this.metric = metric;
    }

}
