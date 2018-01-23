import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPiListComponent } from './rpi-list.component';

describe('RPiListComponent', () => {
  let component: RPiListComponent;
  let fixture: ComponentFixture<RPiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
