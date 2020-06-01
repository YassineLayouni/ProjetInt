import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './application/home/home.component';
import { PagenotfoundComponent } from './application/pagenotfound/pagenotfound.component';
import { LoginComponent } from './application/login/login.component';
import { SignupComponent } from './application/signup/signup.component';
import { HomeetudComponent } from './application/homeetud/homeetud.component';
import { HomeensComponent } from './application/homeens/homeens.component';
import { HomeadmComponent } from './application/homeadm/homeadm.component'
import { AdminstatComponent } from './application/adminstat/adminstat.component';
import { ListusersComponent } from './application/listusers/listusers.component';
import { AjoutstatComponent } from './application/ajoutstat/ajoutstat.component';
import { ListlogicielsensComponent } from './application/listlogicielsens/listlogicielsens.component';
import { AjoutlogicielComponent } from './application/ajoutlogiciel/ajoutlogiciel.component';
import { StatsComponent } from './application/stats/stats.component';
import { ViewlogicielsComponent } from './application/viewlogiciels/viewlogiciels.component';
import { DepotensComponent } from './application/depotens/depotens.component';
import { ViewlogicielsetudComponent } from './application/viewlogicielsetud/viewlogicielsetud.component';
import { ViewstatsetudComponent } from './application/viewstatsetud/viewstatsetud.component';
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

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'etudiant', component:HomeetudComponent},
  {path:'enseignant', component:HomeensComponent},
  {path:'listusers', component:ListusersComponent},
  {path:'adminstat', component:AdminstatComponent},
  {path:'viewstatsens', component:StatsComponent},

  {path:'ajoutstat', component:AjoutstatComponent},
  {path:'logiciels', component:ListlogicielsensComponent},
  {path:'viewlogicielsadm', component:ViewlogicielsComponent},
  {path:'ajoutlogiciel', component:AjoutlogicielComponent},
  {path:'depotens', component:DepotensComponent},

  {path:'viewlogicielsetud', component:ViewlogicielsetudComponent},
  {path:'viewstatsetud', component:ViewstatsetudComponent},
  {path:'depotetud', component:DepotetudComponent},

  {path:'forumens', component:ForumensComponent},
  {path:'AjouterPublicationens', component:ForumensajoutpubComponent},
  {path:'Publicationens/:id', component:PublicationensComponent},
  {path:'AjouterCommentaireens/:id', component:ForumensajoutcmntComponent},

  {path:'forumetud', component:ForumetudComponent},
  {path:'AjouterPublicationetud', component:ForumetudajoutpubComponent},
  {path:'Publicationetud/:id', component:PublicationetudComponent},
  {path:'AjouterCommentaireetud/:id', component:ForumetudajoutcmntComponent},

  {path:'forumadm', component:ForumeadmComponent},
  {path:'AjouterPublicationadm', component:ForumeadmajoutpubComponent},
  {path:'Publicationadm/:id', component:PublicationadmComponent},
  {path:'AjouterCommentaireadm/:id', component:ForumadmajoutcmntComponent},
  
  {path:'QCMens', component:QcmensComponent},
  {path:'creerQCM', component:CreerqcmComponent},
  {path:'Ajouterqs/:id', component:AjouterqsComponent},
  {path:'qcm/:id', component:QcmComponent},



  {path:'admin', component:HomeadmComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component:PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
