import { Panel } from './panel/panel.model';
import { PanelType } from './panel/panel-type.enum';
import { PanelConfiguration } from './panel/panel-configuration.model';
import { PanelLocation } from './panel/panel-location.enum';

export const LayoutPresets = {

  /**
    Preset Layout : Left side fixed panel with main panel to the right.
  */
  fixedLeftPanelLayout: [ // switch to layout class
    new Panel(
      PanelType.FIXED_SIDE_LEFT,
      new PanelConfiguration(
        PanelLocation.LEFT,
        ['']
      )
    ),
    new Panel(
      PanelType.CENTER,
      new PanelConfiguration(
        PanelLocation.CENTER,
        ['']
      )
    )
  ],

  /**
    Preset Layout : Right side fixed panel with main panel to the left.
  */
  fixedRightPanelLayout: [
    new Panel(
      PanelType.FIXED_SIDE_RIGHT,
      new PanelConfiguration(
        PanelLocation.RIGHT,
        ['col-md-push-8', 'col-lg-push-10']
      )
    ),
    new Panel(
      PanelType.CENTER,
      new PanelConfiguration(
        PanelLocation.CENTER,
        ['']
      )
    )
  ],

  /**
    Preset Layout : Left & Right side fixed panel with main panel in the center.
  */
  fixedLeftRightPanelLayout: [
    new Panel(
      PanelType.FIXED_SIDE_LEFT,
      new PanelConfiguration(
        PanelLocation.LEFT,
        ['']
      )
    ),
    new Panel(
      PanelType.CENTER,
      new PanelConfiguration(
        PanelLocation.CENTER,
        ['']
      )
    ),
    new Panel(
      PanelType.FIXED_SIDE_RIGHT,
      new PanelConfiguration(
        PanelLocation.RIGHT,
        ['col-md-push-6', 'col-lg-push-8']
      )
    )
  ],

  /**
    Preset Layout : Full size center panel only
  */
  fullCenterPanelLayout: [
    new Panel(
      PanelType.CENTER,
      new PanelConfiguration(
        PanelLocation.CENTER,
        ['']
      )
    )
  ]

};
