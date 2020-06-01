import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Travail} from 'src/app/interfaces/Travail';
import {Correction} from 'src/app/interfaces/Correction';
import {User} from 'src/app/interfaces/user.interface';


import {UserService} from 'src/app/services/user.service';
import {DepotService} from 'src/app/services/depot.service';


@Component({
  selector: 'app-depotetud',
  templateUrl: './depotetud.component.html',
  styleUrls: ['./depotetud.component.css']
})
export class DepotetudComponent implements OnInit {
  currentetudid:string;
  msgsucc:string='';
  Corrections:Correction[];
  Users:User[];


  @ViewChild('file',{static:false}) file: ElementRef;

  constructor(private dp:DepotService,private us: UserService) { }

  ngOnInit() {
  this.us.user.subscribe(user => this.currentetudid=user.uid);
    this.dp.getAllCorrections().subscribe(
      data => {
        this.Corrections = data.map(
          element =>new Correction( 
            element.payload.doc.id,element.payload.doc.data()['name'],element.payload.doc.data()['lien'],
            element.payload.doc.data()['enseignantid'],element.payload.doc.data()['travailid'])
          )
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

  addTravail(form:NgForm) 
  {
    this.msgsucc='';
      let name=(<Travail>form.value).nom;
      let file = (<HTMLInputElement>this.file.nativeElement).files[0];
      this.dp.addTrav(name,file,this.currentetudid);
      this.msgsucc="Travail Ajouté";
  }
  getEnseignantname(C:Correction):string{
    let name=this.us.userneeded(C.ensid_1,this.Users).name;
    return name;

  }

}
