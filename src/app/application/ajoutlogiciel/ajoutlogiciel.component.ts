import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Logiciel} from 'src/app/interfaces/Logiciel';
import {LogicielService} from 'src/app/services/logiciel.service';
@Component({
  selector: 'app-ajoutlogiciel',
  templateUrl: './ajoutlogiciel.component.html',
  styleUrls: ['./ajoutlogiciel.component.css']
})
export class AjoutlogicielComponent implements OnInit {
  @ViewChild('image',{static:false}) image: ElementRef;


  constructor(private lg:LogicielService,private router: Router) { }

  addLogiciel(form:NgForm) 
  {
      let name=(<Logiciel>form.value).nom;
      let plateform=(<Logiciel>form.value).plateform;
      let lientel=(<Logiciel>form.value).lientel;
      let image = (<HTMLInputElement>this.image.nativeElement).files[0];
      this.lg.addLog(name,plateform,lientel,image);
      this.router.navigate(['/viewlogiciels']);
  }

  ngOnInit() {
  }

}
