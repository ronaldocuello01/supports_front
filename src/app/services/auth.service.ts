import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URI = 'http://localhost:4000/api/auth';

  constructor(public http: HttpClient, private router: Router) { }

  login (user: any){
    return this.http.post<any>(`${this.URI}/login`, user);
  }

  signup (user: any){
    return this.http.post<any>(`${this.URI}/signup`, user);
  }

  logged (){
    return !!localStorage.getItem('token');
  }

  getToken (){
    return localStorage.getItem('token');
  }

  logout (){
    Swal.fire({
      title: 'Cerrar sesion?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Salir'
    }).then((result) => {
      if (result.isConfirmed) {

        localStorage.removeItem('token');
        this.router.navigate(['/dash']);

      }
    })
  }

}
