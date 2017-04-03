package com.gro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gro.model.HumidityData;

public interface HumidityDataRepository extends JpaRepository<HumidityData, Integer> {

}
