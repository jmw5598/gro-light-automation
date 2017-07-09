export class PageLoading {

  protected isLoading: boolean;

  constructor(isLoading:boolean) {
    this.isLoading = isLoading;
  }

  protected standby() {
    this.isLoading = true;
  }

  protected ready() {
    this.isLoading = false;
  }

}
