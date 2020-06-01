import { Injectable } from '@angular/core';
import {AuthenService} from 'src/app/services/authen.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import {User} from 'src/app/interfaces/user.interface';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Observable<firebase.User>

  constructor(private router: Router,private aus:AuthenService,private fs: AngularFirestore,private af: AngularFireAuth)
   { 
    this.user = af.user

   }

  addUser(id, name, email,type){
    return this.fs.doc('users/' + id).set({
      id,
      name,
      email,
      type
    })
  }

  getAllUsersdata(){
    return this.fs.collection('users').valueChanges()

  }
  getAllUsers(){
    return this.fs.collection('users').snapshotChanges()

  }


  userneeded(id:string,users):any{
    let obj:any=null;
    for(let u of users)
      if (id==u.id)
      obj=u;
    return obj;

  }

  

  redirect(typeu:string){
        if(typeu=="etudiant")
          this.router.navigate(['/etudiant']);
        else if (typeu=="enseignant")
          this.router.navigate(['/enseignant']);
        else 
          this.router.navigate(['/admin']);
  }

  deleteUserserv(id:string,Users:User[]):User[]
  {
      let i:number
      for(i=0;i<Users.length;i++)
      {
        if(id==Users[i].id)
        Users.splice(i,1);

      }

     this.fs.doc(`users/${id}`).delete();

      return Users;
  }
}
