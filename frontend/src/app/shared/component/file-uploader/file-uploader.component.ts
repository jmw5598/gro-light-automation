import { Component, OnInit, Input } from '@angular/core';

import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'gro-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  @Input()
  maxFilesInQueue: number;

  @Input()
  url:string;

  public uploader: FileUploader;
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  constructor() {
    this.maxFilesInQueue = 5;
  }

  ngOnInit() {
    this.uploader = new FileUploader({
      url: this.url,
      authToken: localStorage.getItem('token')
    });
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

}
