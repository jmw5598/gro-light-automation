import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPiAddComponent } from './rpi-add.component';

describe('RPiAddComponent', () => {
  let component: RPiAddComponent;
  let fixture: ComponentFixture<RPiAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPiAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPiAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
