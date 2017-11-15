package com.gro.scheduling;

public interface SchedulerService<I> {
    public void addJob(I i);
    public void removeJob(I i);
    public void updateJob(I i);
}
