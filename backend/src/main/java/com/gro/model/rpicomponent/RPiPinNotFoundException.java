package com.gro.model.rpicomponent;

public class RPiPinNotFoundException extends RuntimeException {
    
    private static final long serialVersionUID = -2544295686792571862L;
    
    public RPiPinNotFoundException(String message) {
        super(message);
    }    

}
