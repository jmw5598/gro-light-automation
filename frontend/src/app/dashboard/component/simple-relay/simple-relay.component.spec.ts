import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRelayComponent } from './simple-relay.component';

describe('SimpleRelayComponent', () => {
  let component: SimpleRelayComponent;
  let fixture: ComponentFixture<SimpleRelayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleRelayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
