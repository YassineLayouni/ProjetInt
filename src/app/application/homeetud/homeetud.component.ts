import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import { Router } from '@angular/router';
import {User} from 'src/app/interfaces/user.interface';
import {AuthenService} from 'src/app/services/authen.service';
@Component({
  selector: 'app-homeetud',
  templateUrl: './homeetud.component.html',
  styleUrls: ['./homeetud.component.css']
})
export class HomeetudComponent implements OnInit {
  Users:User[];

  currentetudid:string;

  constructor(private router: Router,private us: UserService,private aus:AuthenService) { }

  ngOnInit() {

    this.us.user.subscribe(user => this.currentetudid=user.uid);
    this.us.getAllUsers().subscribe(
       data => {
         this.Users = data.map(
           element => {
           return {
             id: element.payload.doc.id,
             name:element.payload.doc.data()['name'],
             type:element.payload.doc.data()['type'],
             email:element.payload.doc.data()['email'],
             
           }
         })
       })
  }
  getEtudName(){
    let fullname:string=this.us.userneeded(this.currentetudid,this.Users).name;
    return fullname.substring(0,fullname.indexOf(' '));
  }

  logout(){
    this.aus.logout();
    this.router.navigate(['../home']);

  }

}
