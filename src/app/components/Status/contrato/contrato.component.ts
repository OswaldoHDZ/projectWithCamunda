import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from "src/app/services/service.service"
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {

  @Input() name: string;
  mensaje: string;


  id : string;
  constructor(private dataSvc: ServiceService, private route: ActivatedRoute) {

  }
  idContrato: string;
  ngOnInit() {
    this.dataSvc.enviarMensajeObservable.subscribe(response => {
      this.mensaje = response;
      this.dataSvc.pasarIDdeContrato(response.toString() ).subscribe(data => console.log(data));


    });



    this.dataSvc.enviarIDObservable.subscribe(response => {
      this.id = response;
    });

    // this.dataSvc.pasarIDdeContrato('/engine-rest/process-instance/'+this.mensaje+'/variables' ).subscribe
    //   (data => console.log("Estas en contrato",data)
    // );
    
  }

  ngOnChanges(): void {
    
  }
  //   // console.log("Se cargo el contrato ----")
  //   // console.log("$$$$$$$$",this.dataSvc.getIdContrato());
  //   // console.log("+++++++++++",this.route.snapshot.params.id);
  //   this.idContrato = this.route.snapshot.params.id;
  //   // this.route.queryParams.subscribe(params => {
  //   //   this.name = params['name'];
  //   // });
  //   // this.dataSvc.getVariablesPorId().subscribe(data => console.log("Estas en contrato",data));
  // }
  // ngDoCheck(){
  //   this.idContrato = this.route.snapshot.params.id;
  //   console.log("+++++++++++",this.idContrato);
  //   // this.dataSvc.pasarIDdeContrato(this.route.snapshot.params.id).subscribe(data => console.log("Estas en contrato",data));

  //   // this.dataSvc.getVariablesPorId(this.route.snapshot.params.id).subscribe(data => console.log("Estas en contrato",data));

  // }

}
