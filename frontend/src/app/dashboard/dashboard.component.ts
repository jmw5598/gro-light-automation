import { Component, OnInit } from '@angular/core';
import { PageLoading } from '../core/component/page-loader/page-loading';

@Component({
  selector: 'gro-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends PageLoading implements OnInit {

  constructor() {
    super(true);
  }

  ngOnInit() {
    this.standby();
    setTimeout(() => this.ready(), 1000);
  }

}
