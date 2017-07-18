import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedSidePanelComponent } from './fixed-side-panel.component';

describe('FixedSidePanelComponent', () => {
  let component: FixedSidePanelComponent;
  let fixture: ComponentFixture<FixedSidePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedSidePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
