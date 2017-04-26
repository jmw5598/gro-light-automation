import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPiComponentsComponent } from './rpicomponents.component';

describe('RPiComponentsComponent', () => {
  let component: RPiComponentsComponent;
  let fixture: ComponentFixture<RPiComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPiComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
