import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsRpiComponent } from './settings-rpi.component';

describe('SettingsRpiComponent', () => {
  let component: SettingsRpiComponent;
  let fixture: ComponentFixture<SettingsRpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsRpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsRpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
