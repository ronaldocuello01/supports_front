import { Component, OnInit } from '@angular/core';
import { ServicesService } from "src/app/services/services.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {


  service = {
    indications: '',
    address: '',
    id_type: 1,
  }

  serviceTypes: any[] = [];

  constructor( private servicesService: ServicesService ) { }

  ngOnInit(): void {
    this.getServicetypes();
  }

  createService(){
    console.log('service', this.service);
    this.servicesService.createService(this.service).subscribe(
      res => {
        console.log('service', res);
        Swal.fire('Servicio creado')
      },
      err => console.error(err)
    );
  }

  getServicetypes(){
    this.servicesService.getServicetypes().subscribe(
      res => {
        this.serviceTypes = res;
      },
      err => console.error(err)
    );
  }

}
