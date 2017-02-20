package com.gro.model.sensor;

public class SensorNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;
    
    public SensorNotFoundException() {
        super();
    }
    
    public SensorNotFoundException(String message) {
        super(message);
    }

}
