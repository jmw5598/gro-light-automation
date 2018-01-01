import { RPiComponentPreferences } from './rpicomponent.preferences';

export abstract class RPiComponentSensorPreferences extends RPiComponentPreferences {

  constructor(
    public id: number,
    public minValue: number,
    public maxValue: number,
    public notificationEnabled: boolean,
    public notified: boolean,
  ) {
    super(id);
  }

}
