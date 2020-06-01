import { Component, OnInit } from '@angular/core';
import {QcmService} from 'src/app/services/qcm.service';

import { NgForm } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-ajouterqs',
  templateUrl: './ajouterqs.component.html',
  styleUrls: ['./ajouterqs.component.css']
})
export class AjouterqsComponent implements OnInit {
  idqcm:string;
  constructor(private activatedRoute : ActivatedRoute,private qs:QcmService,private router:Router) { }
  onSubmit(form:NgForm)
  {
    let dateqcm=new Date()
    this.qs.ajouterQuestion(this.idqcm,form.value['question'],form.value['reponse'],form.value['proposition1'],form.value['proposition2'],form.value['proposition3']);
    this.router.navigate(['/QCMens']); 
  }

  ngOnInit() {
    this.idqcm = this.activatedRoute.snapshot.params['id'];

  }

}
