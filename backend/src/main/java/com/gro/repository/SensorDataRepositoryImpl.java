package com.gro.repository;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.gro.model.sensor.Sensor;
import com.gro.model.sensor.SensorData;

@SuppressWarnings("unchecked")
@Repository
public class SensorDataRepositoryImpl implements SensorDataRepositoryCustom {

    @PersistenceContext
    private EntityManager em;
    
    
    @Override
    public List<SensorData> findAllBySensorWithinHours(Sensor sensor, long hours) {
        LocalDateTime ldt = LocalDateTime.now().minusHours(hours);
        Date date = Date.from(ldt.atZone(ZoneId.systemDefault()).toInstant());
        return findDataWithinTime(sensor, date);
    }
    
    
    @Override
    public List<SensorData> findAllBySensorWithinDays(Sensor sensor, long days) {
        LocalDateTime ldt = LocalDateTime.now().minusDays(days);
        Date date = Date.from(ldt.atZone(ZoneId.systemDefault()).toInstant());
        return findDataWithinTime(sensor, date);
    }

    @Override
    public List<SensorData> findAllBySensorWithinWeeks(Sensor sensor, long weeks) {
        LocalDateTime ldt = LocalDateTime.now().minusWeeks(weeks);
        Date date = Date.from(ldt.atZone(ZoneId.systemDefault()).toInstant());
        return findDataWithinTime(sensor, date);
    }

    @Override
    public List<SensorData> findAllBySensorWithinMonths(Sensor sensor, long months) {
        LocalDateTime ldt = LocalDateTime.now().minusMonths(months);
        Date date = Date.from(ldt.atZone(ZoneId.systemDefault()).toInstant());
        return findDataWithinTime(sensor, date);
    }
    
    private List<SensorData> findDataWithinTime(Sensor sensor, Date date) {
        return em.createQuery("FROM SensorData sd WHERE sd.sensor = :sensor AND sd.timestamp > :date)")
                .setParameter("sensor", sensor)
                .setParameter("date", date)
                .getResultList();
    }

}
