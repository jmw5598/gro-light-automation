import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPiComponent } from './rpi.component';

describe('RPiComponent', () => {
  let component: RPiComponent;
  let fixture: ComponentFixture<RPiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
