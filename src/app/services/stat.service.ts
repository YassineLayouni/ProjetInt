import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class StatService {

  constructor(private fs: AngularFirestore,private str: AngularFireStorage) { }

  addStat(name:string, image:File){

        return new Promise((resolve) => {
      let ref = this.str.ref('Statistique/' + image.name)
      ref.put(image).then(() => {
        ref.getDownloadURL().subscribe(photoUrl => {
          this.fs.collection('Statistique').add({
            name,
            photoUrl
          }).then(() => resolve(console.log('mchet')))
        })
      })
    })

  }

  getAllStats(){
    return this.fs.collection('Statistique').snapshotChanges()

  }
}
