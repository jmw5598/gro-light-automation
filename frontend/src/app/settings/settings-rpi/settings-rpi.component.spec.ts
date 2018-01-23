import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsRPiComponent } from './settings-rpi.component';

describe('SettingsRpiComponent', () => {
  let component: SettingsRPiComponent;
  let fixture: ComponentFixture<SettingsRPiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsRPiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsRPiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
