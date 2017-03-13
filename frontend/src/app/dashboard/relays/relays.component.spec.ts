/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RelaysComponent } from './relays.component';

describe('RelaysComponent', () => {
  let component: RelaysComponent;
  let fixture: ComponentFixture<RelaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
