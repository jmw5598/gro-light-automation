import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpiListComponent } from './rpi-list.component';

describe('RpiListComponent', () => {
  let component: RpiListComponent;
  let fixture: ComponentFixture<RpiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
