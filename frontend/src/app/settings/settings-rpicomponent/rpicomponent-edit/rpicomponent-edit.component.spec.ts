import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPiComponentEditComponent } from './rpicomponent-edit.component';

describe('RPiComponentEditComponent', () => {
  let component: RPiComponentEditComponent;
  let fixture: ComponentFixture<RPiComponentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPiComponentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPiComponentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
