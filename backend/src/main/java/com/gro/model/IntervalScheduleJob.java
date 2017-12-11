package com.gro.model;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.NotNull;

@MappedSuperclass
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
