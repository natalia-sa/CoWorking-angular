import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkstationModel } from './workstation/workstation.model';


@Injectable({
  providedIn: 'root'
})
export class WorkstationsService {

  constructor(private http: HttpClient) { }

  createWorkstation(workstation: WorkstationModel): Observable<any> {
    return this.http.post("http://localhost:3000/workstations/", workstation)
  }

  listWorkstations(): Observable<any> {
    return this.http.get("http://localhost:3000/workstations/")
  }
}
