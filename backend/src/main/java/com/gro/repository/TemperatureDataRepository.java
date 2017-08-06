package com.gro.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

import com.gro.model.TemperatureData;
import com.gro.model.rpicomponent.RPiComponent;

public interface TemperatureDataRepository extends JpaRepository<TemperatureData, Integer> {

    Page<TemperatureData> findAllByComponent(RPiComponent component, Pageable pageable);
    
    @Query(
        value = "SELECT td.id, CONVERT(DATE_FORMAT(td.timestamp,'%Y-%m-00-00:00:00'),DATETIME) as 'timestamp', td.component_id, ROUND(AVG(td.temperature), 2) as `temperature` " +
            "FROM temperature_data td " +
            "WHERE td.component_id = ?#{#component.id} " +
            "GROUP BY MONTH(td.timestamp) " +
            "\n#pageable\n",
               
        countQuery = "SELECT COUNT(*) " +
            "FROM temperature_data td " +
            "WHERE td.component_id = ?#{#component.id} " +
            "GROUP BY MONTH(td.timestamp)",
             
        nativeQuery = true
    )
    Page<TemperatureData> findMonthlyAverageByComponent(
            @Param("component") RPiComponent component, Pageable pageable);
    
    
    @Query(
        value = "SELECT td.id, CONVERT(DATE_FORMAT(td.timestamp,'%Y-%m-%d-00:00:00'),DATETIME) as 'timestamp', td.component_id, ROUND(AVG(td.temperature), 2) as `temperature` " +
            "FROM temperature_data td " +
            "WHERE td.component_id = ?#{#component.id} " +
            "GROUP BY DAY(td.timestamp) " +
            "\n#pageable\n",
                
        countQuery = "SELECT COUNT(*) " +
            "FROM temperature_data td " +
            "WHERE td.component_id = ?#{#component.id} " +
            "GROUP BY DAY(td.timestamp)",
             
        nativeQuery = true
    )
    Page<TemperatureData> findDailyAverageByComponent(
            @Param("component") RPiComponent component, Pageable pageable);
    
    
    @Query(
        value = "SELECT td.id, CONVERT(DATE_FORMAT(td.timestamp,'%Y-%m-%d-00:00:00'),DATETIME) as 'timestamp', td.component_id, ROUND(MAX(td.temperature), 2) as `temperature` " +
            "FROM temperature_data td " +
            "WHERE td.component_id = ?#{#component.id} " +
            "GROUP BY DAY(td.timestamp) " +
            "\n#pageable\n",
                
        countQuery = "SELECT COUNT(*) " +
            "FROM temperature_data td " +
            "WHERE td.component_id = ?#{#component.id} " +
            "GROUP BY DAY(td.timestamp)",
             
        nativeQuery = true
    )
    Page<TemperatureData> findDailyHighByComponent(
            @Param("component") RPiComponent component, Pageable pageable);
    
    
    @Query(
        value = "SELECT td.id, CONVERT(DATE_FORMAT(td.timestamp,'%Y-%m-%d-00:00:00'),DATETIME) as 'timestamp', td.component_id, ROUND(MIN(td.temperature), 2) as `temperature` " +
            "FROM temperature_data td " +
            "WHERE td.component_id = ?#{#component.id} " +
            "GROUP BY DAY(td.timestamp) " +
            "\n#pageable\n",
            
        countQuery = "SELECT COUNT(*) " +
            "FROM temperature_data td " +
            "WHERE td.component_id = ?#{#component.id} " +
            "GROUP BY DAY(td.timestamp)",
         
        nativeQuery = true
    )
    Page<TemperatureData> findDailyLowByComponent(
            @Param("component") RPiComponent component, Pageable pageable);
    
    
    @Query(
        value = "SELECT td.id, CONVERT(DATE_FORMAT(td.timestamp,'%Y-%m-%d-%H:00:00'),DATETIME) as 'timestamp', td.component_id, ROUND(AVG(td.temperature), 2) as `temperature` " +
            "FROM temperature_data td " +
            "WHERE td.component_id = ?#{#component.id} " +
            "GROUP BY HOUR(td.timestamp), DAY(td.timestamp) " +
            "\n#pageable\n",
        
        countQuery = "SELECT COUNT(*) " +
            "FROM temperature_data td " +
            "WHERE td.component_id = ?#{#component.id} " +
            "GROUP BY HOUR(td.timestamp), DAY(td.timestamp)",
        
       nativeQuery = true
    )
    Page<TemperatureData> findHourlyAverageByComponent(
            @Param("component") RPiComponent component, Pageable pageable);
    
    
    @Query(
        value = "SELECT td.id, CONVERT(DATE_FORMAT(td.timestamp,'%Y-%m-%d-%H:00:00'),DATETIME) as 'timestamp', td.component_id, ROUND(MAX(td.temperature), 2) as `temperature` " +
            "FROM temperature_data td " +
            "WHERE td.component_id = ?#{#component.id} " +
            "GROUP BY HOUR(td.timestamp), DAY(td.timestamp) " +
            "\n#pageable\n",
                
        countQuery = "SELECT COUNT(*) " +
            "FROM temperature_data td " +
            "WHERE td.component_id = ?#{#component.id} " +
            "GROUP BY HOUR(td.timestamp), DAY(td.timestamp)",
                
        nativeQuery = true
    )
    Page<TemperatureData> findHourlyHighByComponent(
            @Param("component") RPiComponent component, Pageable pageable);
    
    
    @Query(
        value = "SELECT td.id, CONVERT(DATE_FORMAT(td.timestamp,'%Y-%m-%d-%H:00:00'),DATETIME) as 'timestamp', td.component_id, ROUND(MIN(td.temperature), 2) as `temperature` " +
            "FROM temperature_data td " +
            "WHERE td.component_id = ?#{#component.id} " +
            "GROUP BY HOUR(td.timestamp), DAY(td.timestamp) " +
            "\n#pageable\n",
                
        countQuery = "SELECT COUNT(*) " +
            "FROM temperature_data td " +
            "WHERE td.component_id = ?#{#component.id} " +
            "GROUP BY HOUR(td.timestamp), DAY(td.timestamp)",
                    
        nativeQuery = true
    )
    Page<TemperatureData> findHourlyLowByComponent(
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
