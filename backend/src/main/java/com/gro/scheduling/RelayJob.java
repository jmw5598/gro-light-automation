package com.gro.scheduling;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.gro.model.relay.RelayDTO;
import com.gro.model.relay.RelayState;
import com.gro.model.rpicomponent.RPiComponent;
import com.gro.web.service.RelayService;

@Component
public class RelayJob implements Job {
    
    @Autowired
    private RelayService relayService;

    @Override
    public void execute(JobExecutionContext context) throws JobExecutionException {
//        RPiComponent component = (RPiComponent) context.getJobDetail().getJobDataMap().get("component");
//        RelayState state = (RelayState) context.getJobDetail().getJobDataMap().get("state");
//        RelayDTO relay = new RelayDTO(component, state);
//        try {
//            relayService.toggle(relay);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
        System.out.println("\n\nSending MQTT message to toggle relay\n\n");
    }

}
