import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from "src/app/services/service.service"
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {
  
  @Input() name : string;


  constructor(private dataSvc: ServiceService,private route: ActivatedRoute) { }
  idContrato : string;
  
  ngOnInit(): void {
    // console.log("Se cargo el contrato ----")
    // console.log("$$$$$$$$",this.dataSvc.getIdContrato());
    console.log(this.route.snapshot.params.id);
    this.idContrato = this.route.snapshot.params.id;
    // this.route.queryParams.subscribe(params => {
    //   this.name = params['name'];
    // });
    // this.dataSvc.getVariablesPorId().subscribe(data => console.log("Estas en contrato",data));
  }

}
