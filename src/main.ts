import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {Routes} from '@angular/router';
import {PerfumesListComponent} from './app/perfumes-list/perfumes-list.component';
import {ModifyListItemComponent} from './app/modify-list-item/modify-list-item.component';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';



const routes: Routes = [
  { path: 'perfumes', component: PerfumesListComponent },
  {path: 'modify-product', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}
];
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
