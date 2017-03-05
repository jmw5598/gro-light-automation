package com.gro.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.gro.security.model.User;

/**
 * Created by stephan on 20.03.16.
 */
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUsername(String username);
}
