import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoContratosComponent } from './proceso-contratos.component';

describe('ProcesoContratosComponent', () => {
  let component: ProcesoContratosComponent;
  let fixture: ComponentFixture<ProcesoContratosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesoContratosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
