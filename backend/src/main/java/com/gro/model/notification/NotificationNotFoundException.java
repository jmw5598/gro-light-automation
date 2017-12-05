package com.gro.model.notification;

import com.gro.model.NotFoundException;

public class NotificationNotFoundException extends NotFoundException {

    private static final long serialVersionUID = -8762503873478598927L;

    public NotificationNotFoundException(String message) {
        super(message);
    }
}
