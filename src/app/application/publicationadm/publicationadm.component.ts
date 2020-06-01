import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import {ForumService} from 'src/app/services/forum.service';
import {Publication} from 'src/app/interfaces/Publication';
import {Commentaire} from 'src/app/interfaces/Commentaire';
import {UserService} from 'src/app/services/user.service';
import {User} from 'src/app/interfaces/user.interface';
@Component({
  selector: 'app-publicationadm',
  templateUrl: './publicationadm.component.html',
  styleUrls: ['./publicationadm.component.css']
})
export class PublicationadmComponent implements OnInit {
  idp : string;
  pub : Publication;
  Users:User[];

  publications : Publication[]=[];

  constructor(private activatedRoute : ActivatedRoute,private fs:ForumService,private us: UserService,private router:Router) { }

  ngOnInit() {
    this.idp = this.activatedRoute.snapshot.params['id'];

    let i=0;
    this.fs.getAllPub().subscribe(
    data => {
      for(let j=0;j<data.length;j++){
       let commentaires : Commentaire[]=[];

        console.log(data[j].payload.doc.id)
        let cmntsub=this.fs.getCmnts(data[j].payload.doc.id).subscribe(
          donnee=>{      
           commentaires= donnee.map(
              cmnt=>
              new Commentaire(cmnt.payload.doc.id,cmnt.payload.doc.data()['description'],cmnt.payload.doc.data()['ownerid'],cmnt.payload.doc.data()['datec'])
            )
            let pub:Publication=new Publication( 
              data[j].payload.doc.id,data[j].payload.doc.data()['titre'],data[j].payload.doc.data()['description'],
              data[j].payload.doc.data()['ownerid'],data[j].payload.doc.data()['datep'],commentaires)
            this.publications.push(pub)
              if(data[j].payload.doc.id==this.idp)
              this.pub=pub;
              console.log(pub)

          }
        )
        
       
      
          i++;
      }
    })
  
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
  getcurrName(id:string):string{
    return this.us.userneeded(id,this.Users).name;
  }
  deletePub(id:string){
    this.publications=this.fs.deletePub(id,this.publications);
    this.router.navigate(['../forumadm'])
  }
  deleteCmnt(cmts:Commentaire[],idc:string,idp:string){
    cmts=this.fs.deleteCmnt(cmts,idc,idp);

  }
}
