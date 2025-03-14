import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter,Routes} from '@angular/router';
import {PerfumesListComponent} from "./app/perfumes-list/perfumes-list.component";
import {PerfumesListItemComponent} from "./app/perfumes-list-item/perfumes-list-item.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Routes=[
  {path:'', redirectTo: '/perfumes', pathMatch: 'full'},
  {path: 'perfumes' , component: PerfumesListComponent},
  {path: 'perfumes/:id' , component: PerfumesListItemComponent},
  {path: 'modify-list-item' , component: ModifyListItemComponent},
  {path: '**' , component: PageNotFoundComponent},
]
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
