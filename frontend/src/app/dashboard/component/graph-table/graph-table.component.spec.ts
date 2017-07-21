import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTableComponent } from './graph-table.component';

describe('GraphTableComponent', () => {
  let component: GraphTableComponent;
  let fixture: ComponentFixture<GraphTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
