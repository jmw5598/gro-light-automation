import { Panel } from './configuration/panel/panel.model';
import { PanelType } from './configuration/panel/panel-type.enum';
import { PanelConfiguration } from './configuration/panel/panel-configuration.model';
import { PanelLocation } from './configuration/panel/panel-location.enum';

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
        ['col-md-8', 'col-lg-10']
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
        ['col-md-8', 'col-lg-10', 'col-md-pull-4', 'col-lg-pull-2']
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
        ['col-md-4', 'col-lg-8']
      )
    ),
    new Panel(
      PanelType.FIXED_SIDE_RIGHT,
      new PanelConfiguration(
        PanelLocation.RIGHT,
        ['']
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
