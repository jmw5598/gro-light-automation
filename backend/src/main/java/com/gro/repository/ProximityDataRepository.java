package com.gro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gro.model.data.proximity.ProximityData;

public interface ProximityDataRepository extends JpaRepository<ProximityData, Integer> {

}
