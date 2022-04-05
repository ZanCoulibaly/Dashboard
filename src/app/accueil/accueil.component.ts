import { ServicesService } from 'src/app/api/services.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  t: any;
  p: any;
  e: any;
  E: any;
  Classe: any;
  D: any;
  R: any;

  constructor(private service: ServicesService) {
    this.tuteur();
    this.parent();
    this.eleve();
    this.ecole();
   }

  ngOnInit(): void {
    this.nmbreClasse();
  }



  tuteur(){
    this.service.nombreTuteur().subscribe(res=>{
      // console.log(res);
      this.t= res;
    })
  }
  parent(){
    this.service.nombreParent2().subscribe(result=>{
      // console.log(res);
      this.p= result;
    })
  }
  eleve(){
    this.service.nombreEleve().subscribe(result=>{
      // console.log(res);
      this.e= result;
    })
  }
  ecole(){
    this.service.nombreEcole().subscribe(result=>{
      // console.log(res);
      this.E= result;
    })
  }
  nmbreParent(){
    Swal.fire({
      // background: '#004D91',
      title: '<strong style="color:#fff">NombreTotale</strong>',
      icon: 'info',
      html:
        '<b >Parents:  ' + this.p+'</b> </br>'+
        '<b >Elèves:  ' + this.e+'</b> ',
      showCloseButton: true,
      confirmButtonColor: 'purple',
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Merci !',
      confirmButtonAriaLabel: 'Merci ',
    })
  }

  nmbreTuteur(){
    Swal.fire({
      // background: '#ff8000',
      title: '<strong>NombreTotale</strong>',
      icon: 'info',
      html:
        '<b>Tuteur:  ' + this.t+'</b>',
      showCloseButton: true,
      confirmButtonColor: '#ff8000',
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Merci !',
      confirmButtonAriaLabel: 'Merci ',
    })
  }

  nmbreEcole(){
    Swal.fire({
      // background: '#ff8000',
      title: '<strong>NombreTotale</strong>',
      icon: 'info',
      html:
        '<b>Ecole:  ' + this.E+'</b>',
      showCloseButton: true,
      confirmButtonColor: '#004D91',
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Merci !',
      confirmButtonAriaLabel: 'Merci ',
    })
  }
  nmbreC(){
    Swal.fire({
      // background: '#ff8000',
      title: '<strong>NombreTotale</strong>',
      icon: 'info',
      html:
        '<b>Classe:  ' + this.Classe+'</b>',
      showCloseButton: true,
      confirmButtonColor: '#7da8ce',
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Merci !',
      confirmButtonAriaLabel: 'Merci ',
    })
  }
  nmbreD(){
    Swal.fire({
      // background: '#ff8000',
      title: '<strong>NombreTotale</strong>',
      icon: 'info',
      html:
        '<b>Accepter:  ' + this.D+'</b>',
      showCloseButton: true,
      confirmButtonColor: 'rgb(104, 172, 104)',
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Merci !',
      confirmButtonAriaLabel: 'Merci ',
    })
  }
  nmbreR(){
    Swal.fire({
      // background: '#ff8000',
      title: '<strong>NombreTotale</strong>',
      icon: 'info',
      html:
        '<b>Rejetter:  ' + this.R+'</b>',
      showCloseButton: true,
      confirmButtonColor: 'rgb(192, 82, 82)',
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Merci !',
      confirmButtonAriaLabel: 'Merci ',
    })
  }


  nmbreClasse(){
    this.service.NmbreTotaleClasse().subscribe(res=>{
      // console.log(res);
      this.Classe= res;
    })
  }
  nmbreDemande(){
    this.service.NmbreTotalDemande().subscribe(res=>{
      this.D= res;
      console.log(res);
    })
  }
  nmbreRejetter(){
    this.service.NmbreTotalRejetter().subscribe(res=>{
      this.R= res;
    })
  }
}
