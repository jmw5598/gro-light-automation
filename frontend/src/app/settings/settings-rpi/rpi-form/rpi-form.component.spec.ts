import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpiFormComponent } from './rpi-form.component';

describe('RpiFormComponent', () => {
  let component: RpiFormComponent;
  let fixture: ComponentFixture<RpiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
