import { Injectable } from '@angular/core';
import {Qcm} from 'src/app/interfaces/Qcm';
import {Question} from 'src/app/interfaces/Question';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class QcmService {
  tab:any[]

  constructor(private fs: AngularFirestore) { }
  getAllQCM(){
    return this.fs.collection('QCM').snapshotChanges();

  }
  getQuestions(id:string){
    return this.fs.collection('QCM').doc(id).collection('Questions').snapshotChanges();
  }
  
  CreerQCm(nom:string,matiere:string,enseignantid:string,dateqcm:Date){

    this.fs.collection('QCM').add({
      nom,
      matiere,
      enseignantid,
      dateqcm
    })
  }
  ajouterQuestion(idqcm : string,question : string,reponse:string,proposition1:string,proposition2:string,proposition3:string){
    this.fs.collection('QCM/'+idqcm+'/Questions').add({
      question,
      reponse,
      proposition1,
      proposition2,
      proposition3
      
    }

    )

  }
}
