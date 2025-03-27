import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {Routes} from '@angular/router';
import { provideRouter} from "@angular/router";
import {PerfumesListComponent} from './app/perfumes-list/perfumes-list.component';
import {ModifyListItemComponent} from './app/modify-list-item/modify-list-item.component';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';
import {PerfumesListItemComponent} from './app/perfumes-list-item/perfumes-list-item.component';



const routes: Routes = [
  {path:'', redirectTo: '/perfumes', pathMatch: 'full'},
  { path: 'perfumes', component: PerfumesListComponent },
  {path: 'modify-list-item', component: ModifyListItemComponent},
  {path: 'perfumes/:id' , component: PerfumesListItemComponent},
  {path: '**', component:PerfumesListComponent}
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'))
