import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPiDetailsComponent } from './rpi-details.component';

describe('RPiDetailsComponent', () => {
  let component: RPiDetailsComponent;
  let fixture: ComponentFixture<RPiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
