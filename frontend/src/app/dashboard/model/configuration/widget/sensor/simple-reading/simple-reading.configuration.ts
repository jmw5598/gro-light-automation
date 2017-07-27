import { RPiComponent } from '../../../../../../shared/model/rpicomponent/rpicomponent.model';
import { SensorReadingType } from '../../../shared/sensor-reading-type.enum';
import { SimpleReadingColor } from './simple-reading-color.enum';

export class SimpleReadingConfiguration {

  type: SensorReadingType;
  component: RPiComponent;
  size: string[];
  color: SimpleReadingColor;

  constructor(component: RPiComponent) {
    this.type = SensorReadingType.TEMPERATURE;
    this.component = component;
    this.size = [];
    this.color = SimpleReadingColor.GREEN;
  }

}
