package com.gro.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gro.repository.NotificationRepository;
import com.gro.model.Notification;
import com.gro.model.NotificationNotFoundException;

@RestController("/api/notification")
public class NotificationController {
    
    @Value("${notification-not-found}")
    private String notificationNotFound;
    
    @Autowired
    private NotificationRepository notificationRepository;
    
    @RequestMapping(method=RequestMethod.GET)
    public Page<Notification> getAllNotifications(
            @PageableDefault(sort={"timestamp"}, page=0, size=10) Pageable pageable) {
        return notificationRepository.findAll(pageable);
    }
    
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(method=RequestMethod.POST)
    public Notification postNotification(@RequestBody Notification notification) {
        return this.notificationRepository.save(notification);
    }
    
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public Notification getNotificationById(@PathVariable("id") Integer id) {
        Notification notification = this.notificationRepository.findOne(id);
        if(notification == null)
            throw new NotificationNotFoundException(notificationNotFound);
        return notification;
    }
    
    @RequestMapping(value="/state", method=RequestMethod.GET)
    public Page<Notification> getNotificationsByState(
            @RequestParam(name="read", required=true) Boolean read,
            @PageableDefault(sort={"timestamp"}, page=0, size=10) Pageable pageable) {
        return this.notificationRepository.findAllByHasRead(read, pageable);
    }

}
