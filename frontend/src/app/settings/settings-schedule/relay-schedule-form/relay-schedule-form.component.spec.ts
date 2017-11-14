import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelayScheduleFormComponent } from './relay-schedule-form.component';

describe('RelayScheduleFormComponent', () => {
  let component: RelayScheduleFormComponent;
  let fixture: ComponentFixture<RelayScheduleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelayScheduleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelayScheduleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
