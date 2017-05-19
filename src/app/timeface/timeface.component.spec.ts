import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimefaceComponent } from './timeface.component';

describe('TimefaceComponent', () => {
  let component: TimefaceComponent;
  let fixture: ComponentFixture<TimefaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimefaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimefaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
