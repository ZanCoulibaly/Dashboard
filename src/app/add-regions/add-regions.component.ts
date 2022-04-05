import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../api/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-regions',
  templateUrl: './add-regions.component.html',
  styleUrls: ['./add-regions.component.scss']
})
export class AddRegionsComponent implements OnInit {

  constructor(public service: ServicesService, public router: Router) { }
confirmer: any;
  ngOnInit() {
  }
 ajouter(add: NgForm){
  return this.service.addRegion(add.value).subscribe(res=>{
     console.log(res);
	 //this.router.navigate(['http://localhost:8100/register']);
    add.reset();
   })

 }
}
