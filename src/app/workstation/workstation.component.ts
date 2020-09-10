import { Component, OnInit } from '@angular/core';
import { WorkstationsService } from '../workstations.service';

@Component({
  selector: 'app-workstation',
  templateUrl: './workstation.component.html',
  styleUrls: ['./workstation.component.css']
})
export class WorkstationComponent implements OnInit {
  // recebera o retorno da api
  workstations: Array<any> = new Array();

  constructor(private workstationService: WorkstationsService) { }

  ngOnInit(): void {
    this.listWorkstations()
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
