import { Component, OnInit } from '@angular/core';
import {StatService} from 'src/app/services/stat.service';
import {Statistique} from 'src/app/interfaces/Statistique';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  Statistiques:Statistique[];

  constructor(private st:StatService) { }

  ngOnInit() {
    this.st.getAllStats().subscribe(
      data => {
        this.Statistiques = data.map(
          element =>new Statistique( element.payload.doc.id,element.payload.doc.data()['name'],element.payload.doc.data()['photoUrl'])
          )
      })
  }

}
