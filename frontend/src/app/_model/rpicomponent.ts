import { RPiComponentType } from './rpicomponent-type.enum';

export class RPiComponent {

	id: number;
	alias: string;
	pin: number;
	type: RPiComponentType;

  constructor(id: number, alias: string, pin: number, type: RPiComponentType) {
    this.id = id;
    this.alias = alias;
    this.pin = pin;
    this.type = type;
  }

}

// mock data
export const RPICOMPONENTS: RPiComponent[] = [
	{
		id: 1,
		alias: 'Inside DHT22',
		pin: 1,
		type: RPiComponentType.TEMPERATURE_HUMIDITY
	},
	{
		id: 2,
		alias: 'Outside DHT22',
		pin: 2,
		type: RPiComponentType.TEMPERATURE_HUMIDITY
	},
	{
		id: 3,
		alias: 'Nutrient Level',
		pin: 3,
		type: RPiComponentType.PROXIMITY
	},
  {
    id: 4,
    alias: 'Light Upper',
    pin: 11,
    type: RPiComponentType.RELAY
  },
  {
    id: 5,
    alias: 'Light Lower',
    pin: 13,
    type: RPiComponentType.RELAY
  },
  {
    id: 6,
    alias: 'Fan 1',
    pin: 16,
    type: RPiComponentType.RELAY
  },
  {
    id: 7,
    alias: 'Fan 2',
    pin: 15,
    type: RPiComponentType.RELAY
  }
]
