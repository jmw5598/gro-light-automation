import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingsListComponent } from './readings-list.component';

describe('ReadingsListComponent', () => {
  let component: ReadingsListComponent;
  let fixture: ComponentFixture<ReadingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
