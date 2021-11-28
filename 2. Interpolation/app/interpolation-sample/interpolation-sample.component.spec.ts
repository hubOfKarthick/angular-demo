import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationSampleComponent } from './interpolation-sample.component';

describe('InterpolationSampleComponent', () => {
  let component: InterpolationSampleComponent;
  let fixture: ComponentFixture<InterpolationSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolationSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
