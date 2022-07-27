import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private URI = 'http://localhost:4000/api/services';
  private URItypes = 'http://localhost:4000/api/servicetypes';

  constructor(public http: HttpClient) { }


  createService(service: any){
    return this.http.post<any>(`${this.URI}/create`, service);
  }

  getServicetypes(){
    return this.http.get<any>(`${this.URItypes}/`);
  }

  getServices(){
    return this.http.get<any>(`${this.URI}/active`);
  }

  getFinishedServices(){
    return this.http.get<any>(`${this.URI}/finished`);
  }

  startService(id: number){
    return this.http.post<any>(`${this.URI}/start`, {id});
  }

  finishService(id: number){
    return this.http.post<any>(`${this.URI}/finish`, {id});
  }



}
