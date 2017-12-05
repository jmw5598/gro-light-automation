import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPiComponentAddComponent } from './rpicomponent-add.component';

describe('RPiComponentAddComponent', () => {
  let component: RPiComponentAddComponent;
  let fixture: ComponentFixture<RPiComponentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPiComponentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPiComponentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
