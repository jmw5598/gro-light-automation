package com.gro.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

import com.gro.model.RPiComponent;
import com.gro.model.TemperatureDTO;
import com.gro.model.TemperatureData;

public interface TemperatureDataRepository extends JpaRepository<TemperatureData, Integer> {

    Page<TemperatureData> findAllByComponent(RPiComponent component, Pageable pageable);
    
    @Query("SELECT new com.gro.model.TemperatureDTO(DATE(td.timestamp), AVG(td.temperature) AS temperature) " +
           "FROM TemperatureData td WHERE td.component = :component " +
           "GROUP BY MONTH(timestamp)")
    Page<TemperatureDTO> findMonthlyAverageByComponent(
            @Param("component") RPiComponent component, Pageable pageable);
    
    
    @Query("SELECT new com.gro.model.TemperatureDTO(DATE(td.timestamp), AVG(td.temperature) AS temperature) " +
           "FROM TemperatureData td WHERE td.component = :component " +
           "GROUP BY DAY(timestamp)")
    Page<TemperatureDTO> findDailyAverageByComponent(
            @Param("component") RPiComponent component, Pageable pageable);
    
    
    @Query("SELECT new com.gro.model.TemperatureDTO(DATE(td.timestamp), MAX(td.temperature) AS temperature) " +
           "FROM TemperatureData td WHERE td.component = :component " +
           "GROUP BY DAY(timestamp)")
    Page<TemperatureDTO> findDailyHighByComponent(
            @Param("component") RPiComponent component, Pageable pageable);
    
    
    @Query("SELECT new com.gro.model.TemperatureDTO(DATE(td.timestamp), MIN(td.temperature) AS temperature) " +
           "FROM TemperatureData td WHERE td.component = :component " +
           "GROUP BY DAY(timestamp)")
    Page<TemperatureDTO> findDailyLowByComponent(
            @Param("component") RPiComponent component, Pageable pageable);
    
    
    @Query("SELECT new com.gro.model.TemperatureDTO(td.timestamp, AVG(td.temperature) AS temperature) " +
           "FROM TemperatureData td WHERE td.component = :component " +
           "GROUP BY HOUR(timestamp), DAY(timestamp)")
    Page<TemperatureDTO> findHourlyAverageByComponent(
            @Param("component") RPiComponent component, Pageable pageable);
    
    
    @Query("SELECT new com.gro.model.TemperatureDTO(td.timestamp, MAX(td.temperature) AS temperature) " +
           "FROM TemperatureData td WHERE td.component = :component " +
           "GROUP BY HOUR(timestamp), DAY(timestamp)")
    Page<TemperatureDTO> findHourlyHighByComponent(
            @Param("component") RPiComponent component, Pageable pageable);
    
    
    @Query("SELECT new com.gro.model.TemperatureDTO(td.timestamp, MIN(td.temperature) AS temperature) " +
           "FROM TemperatureData td WHERE td.component = :component " +
           "GROUP BY HOUR(timestamp), DAY(timestamp)")
    Page<TemperatureDTO> findHourlyLowByComponent(
            @Param("component") RPiComponent component, Pageable pageable);
    
    
    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    void delete(Integer id);

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    void delete(TemperatureData entity);

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    void delete(Iterable<? extends TemperatureData> entities);

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    void deleteAll();
    
    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    void deleteInBatch(Iterable<TemperatureData> entities);

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    void deleteAllInBatch();
    
}
