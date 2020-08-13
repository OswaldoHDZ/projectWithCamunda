import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererarContratoComponent } from './gererar-contrato.component';

describe('GererarContratoComponent', () => {
  let component: GererarContratoComponent;
  let fixture: ComponentFixture<GererarContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererarContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererarContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
