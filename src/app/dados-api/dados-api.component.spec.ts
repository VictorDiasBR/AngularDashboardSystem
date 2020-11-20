import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosApiComponent } from './dados-api.component';

describe('DadosApiComponent', () => {
  let component: DadosApiComponent;
  let fixture: ComponentFixture<DadosApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
