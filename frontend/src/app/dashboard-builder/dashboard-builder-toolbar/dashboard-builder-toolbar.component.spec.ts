import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBuilderToolbarComponent } from './dashboard-builder-toolbar.component';

describe('DashboardBuilderToolbarComponent', () => {
  let component: DashboardBuilderToolbarComponent;
  let fixture: ComponentFixture<DashboardBuilderToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBuilderToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBuilderToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
