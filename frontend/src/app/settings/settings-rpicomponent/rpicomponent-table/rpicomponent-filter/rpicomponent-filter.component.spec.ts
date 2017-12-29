import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPicomponentFilterComponent } from './rpicomponent-filter.component';

describe('RpicomponentFilterComponent', () => {
  let component: RPicomponentFilterComponent;
  let fixture: ComponentFixture<RPicomponentFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPicomponentFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPicomponentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
