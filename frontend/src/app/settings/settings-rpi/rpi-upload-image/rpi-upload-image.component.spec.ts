import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPiUploadImageComponent } from './rpi-upload-image.component';

describe('RPiUploadImageComponent', () => {
  let component: RPiUploadImageComponent;
  let fixture: ComponentFixture<RPiUploadImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPiUploadImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPiUploadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
