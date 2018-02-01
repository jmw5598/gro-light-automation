import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RPi } from '@app/shared/model/rpi/rpi.model';
import { RPiService } from '@app/core/service/rpi/rpi.service';
import { SystemState } from '@app/shared/model/rpi/system-state.enum';

import { BASE_IMAGE_URL } from '@app/core/service/base-api-url.default';

@Component({
  selector: 'gro-rpi-details',
  templateUrl: './rpi-details.component.html',
  styleUrls: ['./rpi-details.component.css']
})
export class RPiDetailsComponent implements OnInit, OnDestroy {

  private id: number;
  private subscription: any;
  private hasImageUploadShown:boolean = false;

  systemState = SystemState;
  baseImageUrl = BASE_IMAGE_URL;
  rpi: RPi;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rpiService: RPiService
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.retrieveRPiDetails(this.id);
      }
    );
  }

  showImageUploadButton(isShown: boolean) {
    this.hasImageUploadShown = isShown;
  }

  private retrieveRPiDetails(id: number) {
    this.rpiService.findOne(this.id)
      .subscribe(
        data => this.rpi = data,
        error => {
          console.log("error get details");
          this.router.navigate(['/settings/rpi']);
        },
        () => {
          if(!this.rpi)
            this.router.navigate(['/settings/rpi']);
        }
      )
  }

  ngOnDestroy() {
    if(this.subscription)
      this.subscription.unsubscribe();
  }

}
