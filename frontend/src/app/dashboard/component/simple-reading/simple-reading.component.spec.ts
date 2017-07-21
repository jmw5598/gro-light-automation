import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleReadingComponent } from './simple-reading.component';

describe('SimpleReadingComponent', () => {
  let component: SimpleReadingComponent;
  let fixture: ComponentFixture<SimpleReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
