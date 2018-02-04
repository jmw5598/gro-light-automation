export class RPi {
  //TODO: add list of pins and list of components
  constructor(
    public id: number,
    public description: string,
    public ip: string,
    public port: number,
    public mqttUsername: string,
    public mqttPassword: string,
    public imageUrl: string
  ) {}

}
