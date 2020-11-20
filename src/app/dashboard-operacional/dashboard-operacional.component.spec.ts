import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOperacionalComponent } from './dashboard-operacional.component';

describe('DashboardOperacionalComponent', () => {
  let component: DashboardOperacionalComponent;
  let fixture: ComponentFixture<DashboardOperacionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOperacionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOperacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
