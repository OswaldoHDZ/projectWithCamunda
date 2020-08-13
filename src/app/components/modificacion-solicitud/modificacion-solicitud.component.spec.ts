import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionSolicitudComponent } from './modificacion-solicitud.component';

describe('ModificacionSolicitudComponent', () => {
  let component: ModificacionSolicitudComponent;
  let fixture: ComponentFixture<ModificacionSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificacionSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificacionSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
