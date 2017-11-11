package com.gro.scheduling;

public interface SchedulerService {
    public void startAll();
    public void startById();
    public void stopById();
    public void removeById();
}
