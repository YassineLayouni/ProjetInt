import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AuthenService} from 'src/app/services/authen.service';
import {UserService} from 'src/app/services/user.service';

import {User} from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  erreur:string='';
  typeu:string="etudiant";
  constructor(private router: Router,private aus:AuthenService,private us: UserService) { }

  ngOnInit() {
  }

  signup(form) {
    let data:User=form.value;
    this.aus.signup(data.email,data.password)
    .then(res =>{
      this.erreur='';
      this.us.addUser(res.user.uid,data.name,data.email,this.typeu).then(() => {
        this.router.navigate(['/login'])
      });
      
    }
     )
    .catch(err => this.erreur = err.message)



    

  }

}
