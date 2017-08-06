package com.gro.model.notification;

public class NotificationNotFoundException extends RuntimeException {
    
    public NotificationNotFoundException(String message) {
        super(message);
    }
}
