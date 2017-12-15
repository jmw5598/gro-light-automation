package com.gro.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gro.model.notification.Notification;
import com.gro.model.notification.NotificationNotFoundException;
import com.gro.repository.NotificationRepository;

@RestController
@RequestMapping("/api/notification")
public class NotificationController extends AbstractRestController<Notification, Integer> {
    
    @Value("${exception.notification-not-found}")
    private String notificationNotFound;
    
    private NotificationRepository notificationRepository;
    
    @Autowired
    public NotificationController(NotificationRepository repository) {
        super(repository);
        this.notificationRepository = repository;
    }
    
    @RequestMapping(value="/state", method=RequestMethod.GET)
    public Page<Notification> getNotificationsByState(
            @RequestParam(name="read", required=true) Boolean read,
            @PageableDefault(sort={"timestamp"}, direction=Sort.Direction.DESC, page=0, size=10) Pageable pageable) {
        return this.notificationRepository.findAllByIsRead(read, pageable);
    }
    
    @RequestMapping(value="/{id}/state", method=RequestMethod.PATCH)
    public Notification updateNotificationState(
            @PathVariable("id") Integer id, @RequestParam(value="read", required=true) Boolean read) {
        
        Notification notification = notificationRepository.findOne(id);
        validateNotification(notification);
        notification.setRead(read);
        return this.notificationRepository.save(notification);
        
    }
    
    private void validateNotification(Notification notification) {
        if(notification == null)
            throw new NotificationNotFoundException(notificationNotFound);
    }

}
