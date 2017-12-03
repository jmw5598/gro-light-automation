import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpiPinoutComponent } from './rpi-pinout.component';

describe('RpiPinoutComponent', () => {
  let component: RpiPinoutComponent;
  let fixture: ComponentFixture<RpiPinoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpiPinoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpiPinoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
