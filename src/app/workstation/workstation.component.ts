import { Component, OnInit } from '@angular/core';
import { WorkstationsService } from '../workstations.service';
import { WorkstationModel } from './workstation.model';

@Component({
  selector: 'app-workstation',
  templateUrl: './workstation.component.html',
  styleUrls: ['./workstation.component.css']
})
export class WorkstationComponent implements OnInit {
  // recebera o retorno da api
  workstation: WorkstationModel = new WorkstationModel();
  workstations: Array<any> = new Array();

  constructor(private workstationService: WorkstationsService) { }

  ngOnInit(): void {
    this.listWorkstations()
  }

  cadastrar() {
    console.log(this.workstation)
    this.workstationService.createWorkstation(this.workstation).subscribe(workstation => {
      this.workstation = new WorkstationModel();
      this.listWorkstations();
    },err => {
      console.log('erro ao cadstrar workstation', err)
    })
  }

  listWorkstations() {
    this.workstationService.listWorkstations().subscribe(workstations => {
      this.workstations = workstations.data;
      console.log(workstations.data)

    }, err => {
      console.log("error ao listar workstations", err)
    })
  }

}
