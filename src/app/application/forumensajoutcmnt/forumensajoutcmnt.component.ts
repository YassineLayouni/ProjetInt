import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import {ForumService} from 'src/app/services/forum.service';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-forumensajoutcmnt',
  templateUrl: './forumensajoutcmnt.component.html',
  styleUrls: ['./forumensajoutcmnt.component.css']
})
export class ForumensajoutcmntComponent implements OnInit {
  idp : string;
  currentensid:string;

 
  constructor(private activatedRoute : ActivatedRoute,private fs:ForumService,private router:Router,private us: UserService) { }

  ngOnInit() {
    this.us.user.subscribe(user => this.currentensid=user.uid);

    this.idp = this.activatedRoute.snapshot.params['id'];

  }
  onSubmit(form:NgForm){
    let datec=new Date()
    this.fs.ajouterCommentaire(this.idp,form.value['description'],this.currentensid,datec);
    this.router.navigate(['/forumens']); 

  }
}
