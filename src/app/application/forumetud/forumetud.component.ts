import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {ForumService} from 'src/app/services/forum.service';
import {Publication} from 'src/app/interfaces/Publication';
import {Commentaire} from 'src/app/interfaces/Commentaire';
import {User} from 'src/app/interfaces/user.interface';


@Component({
  selector: 'app-forumetud',
  templateUrl: './forumetud.component.html',
  styleUrls: ['./forumetud.component.css']
})
export class ForumetudComponent implements OnInit {
  Users:User[];

  publications:Publication[] =[];

  constructor(private us: UserService,private fs:ForumService) { }

  ngOnInit()	{
    let i=0;
    this.fs.getAllPub().subscribe(
    data => {
      for(let j=0;j<data.length;j++){
       let commentaires : Commentaire[]=[];

        console.log(data[j].payload.doc.id)
        this.fs.getCmnts(data[j].payload.doc.id).subscribe(
          donnee=>{      
           commentaires= donnee.map(
              cmnt=>
              new Commentaire(cmnt.payload.doc.id,cmnt.payload.doc.data()['description'],cmnt.payload.doc.data()['ownerid'],data[j].payload.doc.data()['datec'])
            )
            this.publications.push(new Publication( 
              data[j].payload.doc.id,data[j].payload.doc.data()['titre'],data[j].payload.doc.data()['description'],
              data[j].payload.doc.data()['ownerid'],data[j].payload.doc.data()['datep'],commentaires)) 

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

}
