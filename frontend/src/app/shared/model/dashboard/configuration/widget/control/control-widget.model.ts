import { ControlWidgetType } from './control-widget-type.enum';
import { ControlWidgetConfiguration } from './control-widget.configuration';
import { Widget } from '@app/shared/model/dashboard/configuration/widget/widget.model';
import { WidgetType } from '@app/shared/model/dashboard/configuration/widget/widget-type.enum';

export class ControlWidget extends Widget {

  constructor(
    public type: ControlWidgetType,
    public configuration: ControlWidgetConfiguration
  ) {
    super(WidgetType.CONTROL);
  }

}
