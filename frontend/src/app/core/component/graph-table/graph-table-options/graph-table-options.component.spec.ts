import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTableOptionsComponent } from './graph-table-options.component';

describe('GraphTableOptionsComponent', () => {
  let component: GraphTableOptionsComponent;
  let fixture: ComponentFixture<GraphTableOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphTableOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphTableOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
