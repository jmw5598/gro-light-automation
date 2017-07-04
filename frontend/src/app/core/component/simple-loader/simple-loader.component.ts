import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gro-simple-loader',
  templateUrl: './simple-loader.component.html',
  styleUrls: ['./simple-loader.component.css']
})
export class SimpleLoaderComponent implements OnInit {

  @Input()
  isLoading: boolean = false;

  @Input()
  size: string = 'medium';

  constructor() { }

  ngOnInit() {
  }

}
