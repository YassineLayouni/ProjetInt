import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './application/home/home.component';
import { PagenotfoundComponent } from './application/pagenotfound/pagenotfound.component';
import { LoginComponent } from './application/login/login.component';
import { SignupComponent } from './application/signup/signup.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage'

import { HomeetudComponent } from './application/homeetud/homeetud.component';
import { HomeensComponent } from './application/homeens/homeens.component';
import { HomeadmComponent } from './application/homeadm/homeadm.component';

import { AdminstatComponent } from './application/adminstat/adminstat.component';
import { AjoutstatComponent } from './application/ajoutstat/ajoutstat.component';
import { ListusersComponent } from './application/listusers/listusers.component';

import { ListlogicielsensComponent } from './application/listlogicielsens/listlogicielsens.component';
import { AjoutlogicielComponent } from './application/ajoutlogiciel/ajoutlogiciel.component';
import { StatsComponent } from './application/stats/stats.component';
import { ViewlogicielsComponent } from './application/viewlogiciels/viewlogiciels.component';

import { ViewlogicielsetudComponent } from './application/viewlogicielsetud/viewlogicielsetud.component';
import { ViewstatsetudComponent } from './application/viewstatsetud/viewstatsetud.component';


import { DepotensComponent } from './application/depotens/depotens.component';
import { DepotetudComponent } from './application/depotetud/depotetud.component';


import { ForumensComponent } from './application/forumens/forumens.component';
import { ForumensajoutpubComponent } from './application/forumensajoutpub/forumensajoutpub.component';
import { PublicationensComponent } from './application/publicationens/publicationens.component';
import { ForumensajoutcmntComponent } from './application/forumensajoutcmnt/forumensajoutcmnt.component';


import { ForumetudComponent } from './application/forumetud/forumetud.component';
import { ForumetudajoutpubComponent } from './application/forumetudajoutpub/forumetudajoutpub.component';
import { ForumetudajoutcmntComponent } from './application/forumetudajoutcmnt/forumetudajoutcmnt.component';
import { PublicationetudComponent } from './application/publicationetud/publicationetud.component';

import { ForumeadmComponent } from './application/forumeadm/forumeadm.component';
import { ForumeadmajoutpubComponent } from './application/forumeadmajoutpub/forumeadmajoutpub.component';
import { ForumadmajoutcmntComponent } from './application/forumadmajoutcmnt/forumadmajoutcmnt.component';
import { PublicationadmComponent } from './application/publicationadm/publicationadm.component';

import { QcmensComponent } from './application/qcmens/qcmens.component';
import { CreerqcmComponent } from './application/creerqcm/creerqcm.component';
import { AjouterqsComponent } from './application/ajouterqs/ajouterqs.component';
import { QcmComponent } from './application/qcm/qcm.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    SignupComponent,
    HomeetudComponent,
    HomeensComponent,
    HomeadmComponent,
    AdminstatComponent,
    AjoutstatComponent,
    ListusersComponent,
    ListlogicielsensComponent,
    AjoutlogicielComponent,
    StatsComponent,
    ViewlogicielsComponent,
    DepotensComponent,
    ViewlogicielsetudComponent,
    ViewstatsetudComponent,
    DepotetudComponent,
    ForumensComponent,
    ForumensajoutpubComponent,
    PublicationensComponent,
    ForumensajoutcmntComponent,
    ForumetudComponent,
    ForumetudajoutpubComponent,
    ForumetudajoutcmntComponent,
    PublicationetudComponent,
    ForumeadmComponent,
    ForumeadmajoutpubComponent,
    ForumadmajoutcmntComponent,
    PublicationadmComponent,
    QcmensComponent,
    CreerqcmComponent,
    AjouterqsComponent,
    QcmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyD91MNhxzbYhOioWkny1DRGdx6bN79vh_8",
        authDomain: "projet-f0004.firebaseapp.com",
        databaseURL: "https://projet-f0004.firebaseio.com",
        projectId: "projet-f0004",
        storageBucket: "projet-f0004.appspot.com",
        messagingSenderId: "13229410046",
        appId: "1:13229410046:web:04054d095f3a823fa807af",
        measurementId: "G-FSB6ZE5DG7"
      }
    ),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
