import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../api/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: any ={};
  password: any;
  data: any

  constructor(public service: ServicesService,
    public route: Router) { }

  ngOnInit(): void {
  }
  loginPass(data){
    this.service.loginPassword(data.value.login, data.value.password).subscribe(donne =>{
      console.log(donne);
      if(!donne){
        return this.sweetAlert();
      }else{
        localStorage.setItem('logInfo',JSON.stringify(donne));
        this.route.navigate(['default']);
        this.validre();
      }
      data.reset();
    });
  }
  sweetAlert() {
    Swal.fire({
      title: 'Erreur',
      text: 'Login et mot de pass incorrect',
      icon: 'error',
      showCloseButton: true,
      // showCancelButton: true,
      showLoaderOnConfirm: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Annuler'
    })
  }
  validre(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Bienvenue sur dashboard',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
