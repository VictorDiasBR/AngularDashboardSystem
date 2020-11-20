import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGeralComponent } from './dashboard-geral.component';

describe('DashboardGeralComponent', () => {
  let component: DashboardGeralComponent;
  let fixture: ComponentFixture<DashboardGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
