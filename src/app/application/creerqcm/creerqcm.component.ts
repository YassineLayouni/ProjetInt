import { Component, OnInit } from '@angular/core';
import {QcmService} from 'src/app/services/qcm.service';

import { NgForm } from '@angular/forms';
import {UserService} from 'src/app/services/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-creerqcm',
  templateUrl: './creerqcm.component.html',
  styleUrls: ['./creerqcm.component.css']
})
export class CreerqcmComponent implements OnInit {
  currentensid:string;


  constructor(private qs:QcmService,private us: UserService,private router:Router) { 
    this.us.user.subscribe(user => this.currentensid=user.uid);

  }

  ngOnInit() {
  }

  onSubmit(form:NgForm)
  {
    let dateqcm=new Date()
    this.qs.CreerQCm(form.value['nom'],form.value['matiere'],this.currentensid,dateqcm);
    this.router.navigate(['/QCMens']); 
  }

}
