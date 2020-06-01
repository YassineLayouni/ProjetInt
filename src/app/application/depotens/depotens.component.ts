import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Travail} from 'src/app/interfaces/Travail';
import {User} from 'src/app/interfaces/user.interface';

import {Correction} from 'src/app/interfaces/Correction';

import {UserService} from 'src/app/services/user.service';
import {DepotService} from 'src/app/services/depot.service';


@Component({
  selector: 'app-depotens',
  templateUrl: './depotens.component.html',
  styleUrls: ['./depotens.component.css']
})
export class DepotensComponent implements OnInit {
  @ViewChild('file',{static:false}) file: ElementRef;

  currentensid:string;
  travailid:string="def";

  Users:User[];

  msgsucc:string='';
  Travails:Travail[];
  constructor(private dp:DepotService,private us: UserService) { }

  ngOnInit() {
    this.us.user.subscribe(user => this.currentensid=user.uid);
    this.dp.getAllTravails().subscribe(
      data => {
        this.Travails = data.map(
          element =>new Travail( 
            element.payload.doc.id,element.payload.doc.data()['name'],element.payload.doc.data()['lien'],
            element.payload.doc.data()['etudiantid'])
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
  addCorrection(form:NgForm) 
  {
    this.msgsucc='';
      let name=(<Correction>form.value).nom;
      let file = (<HTMLInputElement>this.file.nativeElement).files[0];
      this.dp.addCorr(name,file,this.currentensid,this.travailid);
      this.msgsucc="Travail Ajouté";
  }




  getEtudiantname(nom:string):string{
    return this.us.userneeded(nom,this.Users).name;
  }
}
