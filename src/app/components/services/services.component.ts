import { Component, OnInit } from '@angular/core';
import { ServicesService } from "src/app/services/services.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: any[] = [];
  fServices: any[] = [];

  constructor( private servicesService: ServicesService ) { }

  ngOnInit(): void {
    this.getServices();
    this.getFinishedServices();
  }

  getServices(){
    this.servicesService.getServices().subscribe(
      res => {
        console.log(res);
        
        this.services = res.services;
      },
      err => console.error(err)
    );
  }

  getFinishedServices(){
    this.servicesService.getFinishedServices().subscribe(
      res => {
        console.log(res);
        
        this.fServices = res.services;
      },
      err => console.error(err)
    );
  }

  startService(id: number){
    this.servicesService.startService(id).subscribe(
      res => {
        console.log('res start', res);
        this.getServices();
      },
      err => console.error(err)
    );
  }

  finishService(id: number){
    this.servicesService.finishService(id).subscribe(
      res => {
        console.log('res finish', res);
        this.getServices();
        this.getFinishedServices();
      },
      err => console.error(err)
    );
  }

}
