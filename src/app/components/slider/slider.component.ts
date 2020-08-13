import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  mobileQuery: MediaQueryList;

  // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerNav = [
    { name: " Home", route: "", icon: 'home' },
    { name: " Crear contrato", route: "proceso_contratos", icon: 'add_circle_outline' },
    { name: " Revisión inicial", route: "solicitudProcesoContratos-1", icon: 'check_circle_outline' },
    { name: " Revisión legal", route: "SolicitudProcesoContratos-2", icon: 'account_balance' },
    { name: " Modificacion Solicitud", route: "SolicitudProcesoContratos-3", icon: 'edit' },
    { name: " Generar contrato", route: "SolicitudProcesoContratos-4", icon: 'check_circle' }
  ]

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  shouldRun = true;
  ngOnInit(): void {
  }

}
