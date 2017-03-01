package com.gro.repository;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.gro.model.sensor.Sensor;
import com.gro.model.sensor.TemperatureHumidityData;

@SuppressWarnings("unchecked")
@Repository
public class TemperatureHumidityDataRepositoryImpl implements TemperatureHumidityRepositoryCustom {

    @PersistenceContext
    private EntityManager em;
    
    
    @Override
    public List<TemperatureHumidityData> findAllBySensorWithinHours(Sensor sensor, long hours) {
        LocalDateTime ldt = LocalDateTime.now().minusHours(hours);
        Date date = Date.from(ldt.atZone(ZoneId.systemDefault()).toInstant());
        return findDataWithinTime(sensor, date);
    }
    
    
    @Override
    public List<TemperatureHumidityData> findAllBySensorWithinDays(Sensor sensor, long days) {
        LocalDateTime ldt = LocalDateTime.now().minusDays(days);
        Date date = Date.from(ldt.atZone(ZoneId.systemDefault()).toInstant());
        return findDataWithinTime(sensor, date);
    }

    @Override
    public List<TemperatureHumidityData> findAllBySensorWithinWeeks(Sensor sensor, long weeks) {
        LocalDateTime ldt = LocalDateTime.now().minusWeeks(weeks);
        Date date = Date.from(ldt.atZone(ZoneId.systemDefault()).toInstant());
        return findDataWithinTime(sensor, date);
    }

    @Override
    public List<TemperatureHumidityData> findAllBySensorWithinMonths(Sensor sensor, long months) {
        LocalDateTime ldt = LocalDateTime.now().minusMonths(months);
        Date date = Date.from(ldt.atZone(ZoneId.systemDefault()).toInstant());
        return findDataWithinTime(sensor, date);
    }
    
    private List<TemperatureHumidityData> findDataWithinTime(Sensor sensor, Date date) {
        return em.createQuery("FROM TemperatureHumidityData sd WHERE sd.sensor = :sensor AND sd.timestamp > :date)")
                .setParameter("sensor", sensor)
                .setParameter("date", date)
                .getResultList();
    }

}
