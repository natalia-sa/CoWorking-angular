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
  display: boolean = false;

  constructor(private workstationService: WorkstationsService) { }

  ngOnInit(): void {
    this.listWorkstations()
  }

  cadastrar() {
    
    this.workstationService.createWorkstation(this.workstation).subscribe(workstation => {
      this.workstation = new WorkstationModel();
      this.listWorkstations();
    },err => {
      console.log('erro ao cadstrar workstation', err)
    })
  }

  deletar(id:any) {
    this.workstationService.deleteWorkstation(id).subscribe(workstation => {
      this.workstation = new WorkstationModel();
      this.listWorkstations();
    }, err => {
      console.log('erro ao deletar workstation', err)
    });
  }

  editar(id: any) {
    this.workstationService.editWorkstation(id, this.workstation).subscribe(workstation =>{
      this.workstation = new WorkstationModel();
      this.listWorkstations();
    }, err => {
      console.log('erro ao editar a workstation', err)
    } )
  }
  
  listWorkstations() {
    this.workstationService.listWorkstations().subscribe(workstations => {
      this.workstations = workstations.data;
      
    }, err => {
      console.log("error ao listar workstations", err)
    })
  }
  changeDisplay() {
    this.display = !this.display
  }

}
