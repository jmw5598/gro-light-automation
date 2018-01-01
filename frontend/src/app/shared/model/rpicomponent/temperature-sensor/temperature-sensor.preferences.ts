import { RPiComponentSensorPreferences } from '../rpicomponent-sensor.preferences';

export class TemperatureSensorPreferences extends RPiComponentSensorPreferences {

  constructor(
    public id: number,
    public minValue: number,
    public maxValue: number,
    public notificationEnabled: boolean,
    public notified: boolean,
  ) {
    super(id, minValue, maxValue, notificationEnabled, notified);
  }

}
