import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import {Travail} from 'src/app/interfaces/Travail';
import {Correction} from 'src/app/interfaces/Correction';


@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private fs: AngularFirestore,private str: AngularFireStorage) { }
  getAllTravails(){
    return this.fs.collection('Travails').snapshotChanges()
  }
  getAllCorrections(){
    return this.fs.collection('Corrections').snapshotChanges()
  }

  addTrav(name:string, fichier:File,etudiantid:string){
    return new Promise((resolve) => {
      let ref = this.str.ref('Travails/' + fichier.name)
      ref.put(fichier).then(() => {
        ref.getDownloadURL().subscribe(lien => {
          this.fs.collection('Travails').add({
            name,
            etudiantid,
            lien
          }).then(() => resolve(console.log('mchet')))
        })
      })
    })

  }

  addCorr(name:string,fichier:File,enseignantid:string,travailid:string){
 
    return new Promise((resolve) => {
      let ref = this.str.ref('Corrections/' + fichier.name)
      ref.put(fichier).then(() => {
        ref.getDownloadURL().subscribe(lien => {
          this.fs.collection('Corrections').add({
            name,
            enseignantid,
            travailid,
            lien
          }).then(() => resolve(console.log('mchet')))
        })
      })
    })

  }


}
