import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmnentContactComponent } from './departmnent-contact.component';

describe('DepartmnentContactComponent', () => {
  let component: DepartmnentContactComponent;
  let fixture: ComponentFixture<DepartmnentContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmnentContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmnentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
