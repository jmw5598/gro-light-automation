package com.gro.model.rpicomponent;

import com.gro.model.NotFoundException;

public class RPiPinNotFoundException extends NotFoundException{
    
    private static final long serialVersionUID = -2544295686792571862L;
    
    public RPiPinNotFoundException(String message) {
        super(message);
    }    

}
