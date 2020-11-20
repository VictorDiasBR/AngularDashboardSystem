import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormObsComponent } from './form-obs.component';

describe('FormObsComponent', () => {
  let component: FormObsComponent;
  let fixture: ComponentFixture<FormObsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormObsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
