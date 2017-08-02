import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDropdownComponent } from './notification-dropdown.component';

describe('NotificationDropdownComponent', () => {
  let component: NotificationDropdownComponent;
  let fixture: ComponentFixture<NotificationDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
