import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPiComponentListComponent } from './rpicomponent-list.component';

describe('RpicomponentListComponent', () => {
  let component: RPiComponentListComponent;
  let fixture: ComponentFixture<RPiComponentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPiComponentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPiComponentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
