import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from 'src/app/services/user.service';
import {ForumService} from 'src/app/services/forum.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forumensajoutpub',
  templateUrl: './forumensajoutpub.component.html',
  styleUrls: ['./forumensajoutpub.component.css']
})
export class ForumensajoutpubComponent implements OnInit {
  currentensid:string;

  constructor(private us: UserService,private fs:ForumService,private router:Router) { 
    this.us.user.subscribe(user => this.currentensid=user.uid);

  }

  ngOnInit() {
  }
  onSubmit(form:NgForm)
  {
    let datp=new Date()
    this.fs.ajouterPulication(form.value['titre'],form.value['description'],this.currentensid,datp);
    this.router.navigate(['/forumens']); 
  }
}
