import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpicomponentFormComponent } from './rpicomponent-form.component';

describe('RpicomponentFormComponent', () => {
  let component: RpicomponentFormComponent;
  let fixture: ComponentFixture<RpicomponentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpicomponentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpicomponentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
