import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelayScheduleListComponent } from './relay-schedule-list.component';

describe('RelayScheduleListComponent', () => {
  let component: RelayScheduleListComponent;
  let fixture: ComponentFixture<RelayScheduleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelayScheduleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelayScheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
