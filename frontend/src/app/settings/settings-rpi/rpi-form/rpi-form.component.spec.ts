import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPiFormComponent } from './rpi-form.component';

describe('RPiFormComponent', () => {
  let component: RPiFormComponent;
  let fixture: ComponentFixture<RPiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
