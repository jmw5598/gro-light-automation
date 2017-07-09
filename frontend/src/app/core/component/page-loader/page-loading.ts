export class PageLoading {

  protected isLoading: boolean;

  protected standby() {
    this.isLoading = true;
  }

  protected ready() {
    this.isLoading = false;
  }

}
