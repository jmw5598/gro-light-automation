import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPiComponentFilterComponent } from './rpicomponent-filter.component';

describe('RPiComponentFilterComponent', () => {
  let component: RPiComponentFilterComponent;
  let fixture: ComponentFixture<RPiComponentFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPiComponentFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPiComponentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
