import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Perfumes } from "./Shared/perfumes";
import {JsonPipe, NgForOf} from "@angular/common";
import {PerfumesListComponent} from './perfume-list/perfume-list.component' ;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, PerfumesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title= 'Royal Perfumes';

}

