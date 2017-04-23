import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpicomponentsComponent } from './rpicomponents.component';

describe('RpicomponentsComponent', () => {
  let component: RpicomponentsComponent;
  let fixture: ComponentFixture<RpicomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpicomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpicomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
