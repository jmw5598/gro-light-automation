import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBuilderComponent } from './dashboard-builder.component';

describe('DashboardBuilderComponent', () => {
  let component: DashboardBuilderComponent;
  let fixture: ComponentFixture<DashboardBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
