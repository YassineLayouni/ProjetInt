import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import { Router } from '@angular/router';
import {User} from 'src/app/interfaces/user.interface';
@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  Users:User[];

  constructor(private router: Router,private us: UserService) { }

  ngOnInit() {
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

  deleteUser(id:string){
    this.Users=this.us.deleteUserserv(id,this.Users);

  }
}
