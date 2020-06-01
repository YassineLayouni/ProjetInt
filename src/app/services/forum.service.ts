import { Injectable } from '@angular/core';

import {Publication} from 'src/app/interfaces/Publication';
import {Commentaire} from 'src/app/interfaces/Commentaire';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})

export class ForumService {
  constructor(private fs: AngularFirestore) { }



  getAllPub(){
    return this.fs.collection('Publications').snapshotChanges();

  }
  getCmnts(id:string){
    return this.fs.collection('Publications').doc(id).collection('Commentaires').snapshotChanges();
  }
  

 

  ajouterPulication(titre:string,description:string,ownerid:string,datep:Date){

    this.fs.collection('Publications').add({
      titre,
      description,
      ownerid,
      datep
    })
  }

  ajouterCommentaire(idp : string,description : string,ownerid:string,datec:Date){
    this.fs.collection('Publications/'+idp+'/Commentaires').add({
        description,
        ownerid,
        datec
      
    }

    )

  }
  deletePub(id:string,publications:Publication[]):Publication[]
  {
      let i:number;
      for(i=0;i<publications.length;i++)
      {
        if(id==publications[i].idp)
        publications = publications.filter(obj => obj !== publications[i]);
      }

     this.fs.doc(`Publications/${id}`).delete();

      return publications;
  }

  deleteCmnt(cmts:Commentaire[],idc:string,idp:string):Commentaire[]
  {
      let i:number;
      for(i=0;i<cmts.length;i++)
      {
        if(idc==cmts[i].idc)
        cmts = cmts.filter(obj => obj !== cmts[i]);
      }

     this.fs.doc(`Publications/${idp}/Commentaires/${idc}`).delete();
      return cmts;
  }
}