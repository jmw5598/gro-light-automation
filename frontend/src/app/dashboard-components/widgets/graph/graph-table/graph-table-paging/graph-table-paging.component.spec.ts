import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTablePagingComponent } from './graph-table-paging.component';

describe('GraphTablePagingComponent', () => {
  let component: GraphTablePagingComponent;
  let fixture: ComponentFixture<GraphTablePagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphTablePagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphTablePagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
