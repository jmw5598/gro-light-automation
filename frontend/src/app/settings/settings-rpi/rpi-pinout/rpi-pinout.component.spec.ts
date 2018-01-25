import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPiPinoutComponent } from './rpi-pinout.component';

describe('RPiPinoutComponent', () => {
  let component: RPiPinoutComponent;
  let fixture: ComponentFixture<RPiPinoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPiPinoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPiPinoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
