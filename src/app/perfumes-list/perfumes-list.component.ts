import { Component } from '@angular/core';
import {Perfumes} from "../Shared/perfumes";

import {PerfumesListItemComponent} from "../perfumes-list-item/perfumes-list-item.component";
import {NgForOf} from "@angular/common";
 @Component({
  imports: [PerfumesListItemComponent, NgForOf],
  selector: 'app-perfumes-list',
  standalone: true,
  styleUrl: './perfumes-list.component.css',
  templateUrl: './perfumes-list.component.html'
})

export class PerfumesListComponent{

}
