import { ToastType } from './toast-type.enum';

export class ToastMessage {

  constructor(
    public type: ToastType,
    public message: string
  ) {}

}
