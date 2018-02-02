import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPiComponentFormComponent } from './rpicomponent-form.component';

describe('RPiComponentFormComponent', () => {
  let component: RPiComponentFormComponent;
  let fixture: ComponentFixture<RPiComponentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPiComponentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPiComponentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
