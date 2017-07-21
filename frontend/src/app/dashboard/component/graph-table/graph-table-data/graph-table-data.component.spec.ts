import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTableDataComponent } from './graph-table-data.component';

describe('GraphTableDataComponent', () => {
  let component: GraphTableDataComponent;
  let fixture: ComponentFixture<GraphTableDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphTableDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
