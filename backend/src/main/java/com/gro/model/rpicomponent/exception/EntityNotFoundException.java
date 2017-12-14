package com.gro.model.rpicomponent.exception;

import com.gro.model.NotFoundException;

public class EntityNotFoundException extends NotFoundException {

    private static final long serialVersionUID = 6104607355884857925L;
    
    public EntityNotFoundException(String message) {
        super(message);
    }
    
}
