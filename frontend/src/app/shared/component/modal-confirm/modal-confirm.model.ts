export class ModalConfirm {

  public message: string = 'Are you sure?';
  public isShown: boolean = false;
  public title: string = 'Confirmation';

  constructor(
    message?: string,
    isShown?: boolean,
    title?: string
  ) {
    this.message = message;
    this.isShown = isShown;
    this.title = title;
  }

  public toggle() {
    this.isShown = !this.isShown;
  }

  public setShown(isShown: boolean) {
    this.isShown = isShown;
  }

}
