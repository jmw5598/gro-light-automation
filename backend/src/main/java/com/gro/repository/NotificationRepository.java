package com.gro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gro.model.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Integer> {
    

}
