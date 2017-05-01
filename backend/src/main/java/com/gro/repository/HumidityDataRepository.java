package com.gro.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

import com.gro.model.HumidityDTO;
import com.gro.model.HumidityData;
import com.gro.model.RPiComponent;


public interface HumidityDataRepository extends JpaRepository<HumidityData, Integer> {

    Page<HumidityData> findAllByComponent(RPiComponent component, Pageable pageable);

    @Query("SELECT new com.gro.model.HumidityDTO(DATE(hd.timestamp), ROUND(AVG(hd.humidity), 2), hd.component.id) " +
           "FROM HumidityData hd WHERE hd.component = :component " +
           "GROUP BY MONTH(hd.timestamp)")
    Page<HumidityDTO> findMonthlyAverageByComponent(
            @Param("component") RPiComponent component, Pageable pageable);
    
    @Query("SELECT new com.gro.model.HumidityDTO(DATE(hd.timestamp), ROUND(AVG(hd.humidity), 2), hd.component.id) " +
            "FROM HumidityData hd WHERE hd.component = :component " +
            "GROUP BY DAY(hd.timestamp)")
    Page<HumidityDTO> findDailyAverageByComponent(
            @Param("component") RPiComponent component, Pageable pageable);
    
    @Query("SELECT new com.gro.model.HumidityDTO(DATE(hd.timestamp), MAX(hd.humidity), hd.component.id) " +
           "FROM HumidityData hd WHERE hd.component = :component " +
           "GROUP BY DAY(hd.timestamp)")
    Page<HumidityDTO> findDailyHighByComponent(
           @Param("component") RPiComponent component, Pageable pageable);
     
     
    @Query("SELECT new com.gro.model.HumidityDTO(DATE(hd.timestamp), MIN(hd.humidity), hd.component.id) " +
           "FROM HumidityData hd WHERE hd.component = :component " +
           "GROUP BY DAY(hd.timestamp)")
    Page<HumidityDTO> findDailyLowByComponent(
           @Param("component") RPiComponent component, Pageable pageable);
     
     
    @Query("SELECT new com.gro.model.HumidityDTO(hd.timestamp, ROUND(AVG(hd.humidity), 2), hd.component.id) " +
           "FROM HumidityData hd WHERE hd.component = :component " +
           "GROUP BY HOUR(hd.timestamp), DAY(hd.timestamp)")
    Page<HumidityDTO> findHourlyAverageByComponent(
           @Param("component") RPiComponent component, Pageable pageable);
     
     
    @Query("SELECT new com.gro.model.HumidityDTO(hd.timestamp, MAX(hd.humidity), hd.component.id) " +
           "FROM HumidityData hd WHERE hd.component = :component " +
           "GROUP BY HOUR(hd.timestamp), DAY(hd.timestamp)")
    Page<HumidityDTO> findHourlyHighByComponent(
           @Param("component") RPiComponent component, Pageable pageable);
     
     
    @Query("SELECT new com.gro.model.HumidityDTO(hd.timestamp, MIN(hd.humidity), hd.component.id) " +
           "FROM HumidityData hd WHERE hd.component = :component " +
           "GROUP BY HOUR(hd.timestamp), DAY(hd.timestamp)")
    Page<HumidityDTO> findHourlyLowByComponent(
           @Param("component") RPiComponent component, Pageable pageable);
    
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Override
    void delete(Integer id);
    
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Override
    void delete(HumidityData entity);
    
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Override
    void delete(Iterable<? extends HumidityData> entities);
    
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Override
    void deleteAll();

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Override
    void deleteInBatch(Iterable<HumidityData> entities);

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Override
    void deleteAllInBatch();
    
}
