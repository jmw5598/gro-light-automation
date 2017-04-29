import { Authority } from './authorit.enum';

export class User {
  
  constructor(
    public username: string;
    public firstname: string;
    public lastname: string;
    public email: string;
    public authorities: Array<Authority>;
    public enabled: boolean;
  ) {}

}
