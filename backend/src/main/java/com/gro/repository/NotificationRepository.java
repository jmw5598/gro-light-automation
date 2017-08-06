package com.gro.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.gro.model.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Integer> {
    
    public Page<Notification> findAllByHasRead(Boolean read, Pageable pageable);

}
