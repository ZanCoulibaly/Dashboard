import { ServicesService } from 'src/app/api/services.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(private service: ServicesService) {
    this.tuteur();
    this.parent();
    this.eleve();
    this.ecole();
   }

  ngOnInit() {}



  tuteur(){
    this.service.nombreTuteur().subscribe(res=>{
      // console.log(res);
      this.t= res;
    })
  }
  parent(){
    this.service.nombreParent().subscribe(result=>{
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

}
