import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import {StatService} from 'src/app/services/stat.service';
import {Statistique} from 'src/app/interfaces/Statistique';

@Component({
  selector: 'app-ajoutstat',
  templateUrl: './ajoutstat.component.html',
  styleUrls: ['./ajoutstat.component.css']
})
export class AjoutstatComponent implements OnInit {
  @ViewChild('image',{static:false}) image: ElementRef;

  constructor(private st:StatService,private router: Router) { }

  ngOnInit() {
  }
  addStat(form:NgForm) 
  {
      let name=(<Statistique>form.value).nom;
      let image = (<HTMLInputElement>this.image.nativeElement).files[0];
      this.st.addStat(name,image);
      this.router.navigate(['/adminstat']); 
  }

}
