package com.gro.repository.data;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

import com.gro.model.rpicomponent.AbstractRPiComponent;
import com.gro.model.rpicomponent.data.HumidityData;


public interface HumidityDataRepository extends JpaRepository<HumidityData, Integer> {

    Page<HumidityData> findAllByComponent(AbstractRPiComponent component, Pageable pageable);

    @Query(
        value = "SELECT hd.id, CONVERT(DATE_FORMAT(hd.timestamp,'%Y-%m-00-00:00:00'),DATETIME) as 'timestamp', hd.component_id, ROUND(AVG(hd.humidity), 2) as `humidity` " +
            "FROM humidity_data hd " +
            "WHERE hd.component_id = ?#{#component.id} " +
            "GROUP BY MONTH(hd.timestamp) " +
            "\n#pageable\n",
                   
        countQuery = "SELECT COUNT(*) " +
            "FROM humidity_data hd " +
            "WHERE hd.component_id = ?#{#component.id} " +
            "GROUP BY MONTH(hd.timestamp)",
                 
        nativeQuery = true
    )
    Page<HumidityData> findMonthlyAverageByComponent(
            @Param("component") AbstractRPiComponent component, Pageable pageable);
    
    
    @Query(
        value = "SELECT hd.id, CONVERT(DATE_FORMAT(hd.timestamp,'%Y-%m-%d-00:00:00'),DATETIME) as 'timestamp', hd.component_id, ROUND(AVG(hd.humidity), 2) as `humidity` " +
            "FROM humidity_data hd " +
            "WHERE hd.component_id = ?#{#component.id} " +
            "GROUP BY DAY(hd.timestamp) " +
            "\n#pageable\n",
                    
        countQuery = "SELECT COUNT(*) " +
            "FROM humidity_data hd " +
            "WHERE hd.component_id = ?#{#component.id} " +
            "GROUP BY DAY(hd.timestamp)",
                 
        nativeQuery = true
    )
    Page<HumidityData> findDailyAverageByComponent(
            @Param("component") AbstractRPiComponent component, Pageable pageable);
    
    
    @Query(
        value = "SELECT hd.id, CONVERT(DATE_FORMAT(hd.timestamp,'%Y-%m-%d-00:00:00'),DATETIME) as 'timestamp', hd.component_id, ROUND(MAX(hd.humidity), 2) as `humidity` " +
            "FROM humidity_data hd " +
            "WHERE hd.component_id = ?#{#component.id} " +
            "GROUP BY DAY(hd.timestamp) " +
            "\n#pageable\n",
                    
        countQuery = "SELECT COUNT(*) " +
            "FROM humidity_data hd " +
            "WHERE hd.component_id = ?#{#component.id} " +
            "GROUP BY DAY(hd.timestamp)",
                 
        nativeQuery = true
    )
    Page<HumidityData> findDailyHighByComponent(
           @Param("component") AbstractRPiComponent component, Pageable pageable);
     
    
    @Query(
        value = "SELECT hd.id, CONVERT(DATE_FORMAT(hd.timestamp,'%Y-%m-%d-00:00:00'),DATETIME) as 'timestamp', hd.component_id, ROUND(MIN(hd.humidity), 2) as `humidity` " +
            "FROM humidity_data hd " +
            "WHERE hd.component_id = ?#{#component.id} " +
            "GROUP BY DAY(hd.timestamp) " +
            "\n#pageable\n",
                
        countQuery = "SELECT COUNT(*) " +
            "FROM humidity_data hd " +
            "WHERE hd.component_id = ?#{#component.id} " +
            "GROUP BY DAY(hd.timestamp)",
             
        nativeQuery = true
    )
    Page<HumidityData> findDailyLowByComponent(
           @Param("component") AbstractRPiComponent component, Pageable pageable);
     
     
    @Query(
        value = "SELECT hd.id, CONVERT(DATE_FORMAT(hd.timestamp,'%Y-%m-%d-%H:00:00'),DATETIME) as 'timestamp', hd.component_id, ROUND(AVG(hd.humidity), 2) as `humidity` " +
            "FROM humidity_data hd " +
            "WHERE hd.component_id = ?#{#component.id} " +
            "GROUP BY HOUR(hd.timestamp), DAY(hd.timestamp) " +
            "\n#pageable\n",
            
        countQuery = "SELECT COUNT(*) " +
            "FROM humidity_data hd " +
            "WHERE hd.component_id = ?#{#component.id} " +
            "GROUP BY HOUR(hd.timestamp), DAY(hd.timestamp)",
            
        nativeQuery = true
    )
    Page<HumidityData> findHourlyAverageByComponent(
           @Param("component") AbstractRPiComponent component, Pageable pageable);
     
    
    @Query(
        value = "SELECT hd.id, CONVERT(DATE_FORMAT(hd.timestamp,'%Y-%m-%d-%H:00:00'),DATETIME) as 'timestamp', hd.component_id, ROUND(MAX(hd.humidity), 2) as `humidity` " +
            "FROM humidity_data hd " +
            "WHERE hd.component_id = ?#{#component.id} " +
            "GROUP BY HOUR(hd.timestamp), DAY(hd.timestamp) " +
            "\n#pageable\n",
                    
        countQuery = "SELECT COUNT(*) " +
            "FROM humidity_data hd " +
            "WHERE hd.component_id = ?#{#component.id} " +
            "GROUP BY HOUR(hd.timestamp), DAY(hd.timestamp)",
                    
        nativeQuery = true
    )
    Page<HumidityData> findHourlyHighByComponent(
           @Param("component") AbstractRPiComponent component, Pageable pageable);
     
    
    @Query(
        value = "SELECT hd.id, CONVERT(DATE_FORMAT(hd.timestamp,'%Y-%m-%d-%H:00:00'),DATETIME) as 'timestamp', hd.component_id, ROUND(MIN(hd.humidity), 2) as `humidity` " +
            "FROM humidity_data hd " +
            "WHERE hd.component_id = ?#{#component.id} " +
            "GROUP BY HOUR(hd.timestamp), DAY(hd.timestamp) " +
            "\n#pageable\n",
                    
        countQuery = "SELECT COUNT(*) " +
            "FROM humidity_data hd " +
            "WHERE hd.component_id = ?#{#component.id} " +
            "GROUP BY HOUR(hd.timestamp), DAY(hd.timestamp)",
                       
        nativeQuery = true
    )
    Page<HumidityData> findHourlyLowByComponent(
           @Param("component") AbstractRPiComponent component, Pageable pageable);
    
    
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
