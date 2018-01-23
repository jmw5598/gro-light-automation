import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpiComponent } from './rpi.component';

describe('RpiComponent', () => {
  let component: RpiComponent;
  let fixture: ComponentFixture<RpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
