package com.gro.model;

public class PinNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;
    
    public PinNotFoundException() {
        super();
    }
    
    public PinNotFoundException(String message) {
        super(message);
    }
    
}
