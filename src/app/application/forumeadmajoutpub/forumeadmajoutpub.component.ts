import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from 'src/app/services/user.service';
import {ForumService} from 'src/app/services/forum.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-forumeadmajoutpub',
  templateUrl: './forumeadmajoutpub.component.html',
  styleUrls: ['./forumeadmajoutpub.component.css']
})
export class ForumeadmajoutpubComponent implements OnInit {
  currentadmid:string;

  constructor(private us: UserService,private fs:ForumService,private router:Router) { 
    this.us.user.subscribe(user => this.currentadmid=user.uid);

  }
  ngOnInit() {
  }
  onSubmit(form:NgForm)
  {
    let datp=new Date()
    this.fs.ajouterPulication(form.value['titre'],form.value['description'],this.currentadmid,datp);
    this.router.navigate(['/forumadm']); 
  }

}
