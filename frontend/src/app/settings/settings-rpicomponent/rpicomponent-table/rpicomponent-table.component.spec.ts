import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPiComponentTableComponent } from './rpicomponent-table.component';

describe('RPiComponentsTableComponent', () => {
  let component: RPiComponentTableComponent;
  let fixture: ComponentFixture<RPiComponentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPiComponentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPiComponentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
