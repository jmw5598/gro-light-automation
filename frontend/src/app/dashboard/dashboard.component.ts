import { Component, OnInit } from '@angular/core';
import { PageLoading } from '../shared/component/page-loader/page-loading';
import { RPiComponent } from '../shared/model/rpicomponent/rpicomponent.model';
import { RPiComponentType } from '../shared/model/rpicomponent/rpicomponent-type.enum';
import { SimpleReadingConfiguration } from './model/configuration/widget/sensor/simple-reading/simple-reading.configuration';
import { SensorReadingType } from './model/configuration/shared/sensor-reading-type.enum';
import { SimpleReadingColor } from './model/configuration/widget/sensor/simple-reading/simple-reading-color.enum';

import { SimpleRelayConfiguration } from './model/configuration/widget/control/simple-relay/simple-relay.configuration';
import { SimpleRelayColor } from './model/configuration/widget/control/simple-relay/simple-relay-color.enum';
import { RelayDTO } from '../shared/model/rpicomponent/relaydto.model';
import { RelayState } from '../shared/model/rpicomponent/relay-state.enum';


@Component({
  selector: 'gro-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends PageLoading implements OnInit {

  constructor() {
    super(true);
    this.setup();
  }

  ngOnInit() {
    this.standby();
    setTimeout(() => this.ready(), 1000);
  }

  //temporary
  component = new RPiComponent(1, "Inside DHT22", 22, RPiComponentType.TEMPERATURE_HUMIDITY);
  component2 = new RPiComponent(1, "Inside DHT22", 22, RPiComponentType.TEMPERATURE_HUMIDITY);
  component3 = new RPiComponent(1, "Inside DHT22", 22, RPiComponentType.TEMPERATURE_HUMIDITY);
  component4 = new RPiComponent(48, "Outside DHT22", 27, RPiComponentType.TEMPERATURE_HUMIDITY);
  component5 = new RPiComponent(48, "Outside DHT22", 27, RPiComponentType.TEMPERATURE_HUMIDITY);
  component6 = new RPiComponent(48, "Outside DHT22", 27, RPiComponentType.TEMPERATURE_HUMIDITY);
  component7 = new RPiComponent(48, "Outside DHT22", 27, RPiComponentType.TEMPERATURE_HUMIDITY);
  blueConfig = new SimpleReadingConfiguration(this.component);
  orangeConfig = new SimpleReadingConfiguration(this.component2);
  redConfig = new SimpleReadingConfiguration(this.component3);
  grayLightConfig = new SimpleReadingConfiguration(this.component4);
  grayConfig = new SimpleReadingConfiguration(this.component5);
  grayDarkConfig = new SimpleReadingConfiguration(this.component6);
  grayDarkerConfig = new SimpleReadingConfiguration(this.component7);

  lightToggle = new RelayDTO(new RPiComponent(46, "Light 1", 12, RPiComponentType.RELAY), RelayState.DISABLED);
  fanToggle = new RelayDTO(new RPiComponent(47, "Fan 1", 16, RPiComponentType.RELAY), RelayState.DISABLED);
  tLightGrayConfig = new SimpleRelayConfiguration(this.lightToggle);
  tGrayConfig = new SimpleRelayConfiguration(this.fanToggle);
  tGrayDarkConfig = new SimpleRelayConfiguration(this.lightToggle);
  tGrayDarkerConfig = new SimpleRelayConfiguration(this.fanToggle);
  tGreenConfig = new SimpleRelayConfiguration(this.lightToggle);
  tBlueConfig = new SimpleRelayConfiguration(this.fanToggle);
  tOrangeConfig = new SimpleRelayConfiguration(this.lightToggle);
  tRedConfig = new SimpleRelayConfiguration(this.fanToggle);




  setup() {
    this.blueConfig.color = SimpleReadingColor.BLUE;
    this.blueConfig.type = SensorReadingType.HUMIDITY;
    this.orangeConfig.color = SimpleReadingColor.ORANGE;
    this.redConfig.color = SimpleReadingColor.RED;
    this.redConfig.type = SensorReadingType.HUMIDITY;
    this.grayLightConfig.color = SimpleReadingColor.GRAY_LIGHT;
    this.grayConfig.color = SimpleReadingColor.GRAY;
    this.grayDarkConfig.color = SimpleReadingColor.GRAY_DARK;
    this.grayDarkerConfig.color = SimpleReadingColor.GRAY_DARKER;
    this.tLightGrayConfig.color = SimpleRelayColor.GRAY_LIGHT;
    this.tGrayConfig.color = SimpleRelayColor.GRAY;
    this.tGrayDarkConfig.color = SimpleRelayColor.GRAY_DARK;
    this.tGrayDarkerConfig.color = SimpleRelayColor.GRAY_DARKER;
    this.tGreenConfig.color = SimpleRelayColor.GREEN;
    this.tBlueConfig.color = SimpleRelayColor.BLUE;
    this.tOrangeConfig.color = SimpleRelayColor.ORANGE;
    this.tRedConfig.color = SimpleRelayColor.RED;
  }
}
