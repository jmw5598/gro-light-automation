package com.gro.model;

public class NotFoundException extends RuntimeException {

    private static final long serialVersionUID = -4590791532876434L;
    
    public NotFoundException(String message) {
        super(message);
    }

}
