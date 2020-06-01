import { Component, OnInit } from '@angular/core';
import {QcmService} from 'src/app/services/qcm.service';
import {Qcm} from 'src/app/interfaces/Qcm';
import {Question} from 'src/app/interfaces/Question';
import {UserService} from 'src/app/services/user.service';
import {User} from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-qcmens',
  templateUrl: './qcmens.component.html',
  styleUrls: ['./qcmens.component.css']
})
export class QcmensComponent implements OnInit {
  Users:User[];
  QCMs:Qcm[]=[];
  constructor(private us: UserService,private qs:QcmService) { }

  ngOnInit() {
    this.qs.getAllQCM().subscribe(
    data => {
      for(let j=0;j<data.length;j++){
       let questions : Question[]=[];

        console.log(data[j].payload.doc.id)
        this.qs.getQuestions(data[j].payload.doc.id).subscribe(
          donnee=>{      
            questions= donnee.map(
              qs=>
              new Question(qs.payload.doc.id,
                qs.payload.doc.data()['question'],
                qs.payload.doc.data()['reponse'],
                qs.payload.doc.data()['proposition1'],
                qs.payload.doc.data()['proposition2'],
                qs.payload.doc.data()['proposition3'])
            )
            this.QCMs.push(new Qcm( 
              data[j].payload.doc.id,
              data[j].payload.doc.data()['nom'],
              data[j].payload.doc.data()['matiere'],
              data[j].payload.doc.data()['enseignantid'],
              data[j].payload.doc.data()['dateqcm'],
              questions)
              ) 

          }
        )
        
       
        
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
