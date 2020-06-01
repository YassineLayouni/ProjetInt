import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import {Logiciel} from 'src/app/interfaces/Logiciel';

@Injectable({
  providedIn: 'root'
})
export class LogicielService {

  constructor(private fs: AngularFirestore,private str: AngularFireStorage) { }
  
  addLog(name:string,plateform:string,lientel:string, image:File){
    return new Promise((resolve) => {
      let ref = this.str.ref('Logicielsicon/' + image.name)
      ref.put(image).then(() => {
        ref.getDownloadURL().subscribe(photoUrl => {
          this.fs.collection('Logiciels').add({
            name,
            plateform,
            lientel,
            photoUrl
          }).then(() => resolve(console.log('mchet')))
        })
      })
    })

  }


  getAllLogiciels(){
    return this.fs.collection('Logiciels').snapshotChanges()

  }


  deleteLogserv(id:string,Logiciels:Logiciel[]):Logiciel[]
  {
      let i:number
      for(i=0;i<Logiciels.length;i++)
      {
        if(id==Logiciels[i].id)
        Logiciels.splice(i,1);

      }

     this.fs.doc(`Logiciels/${id}`).delete();

      return Logiciels;
  }

}
