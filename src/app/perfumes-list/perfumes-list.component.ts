import { Component } from '@angular/core';
import {Perfumes} from "../Shared/perfumes";

import {PerfumesListItemComponent} from "../perfumes-list-item/perfumes-list-item.component";
import {NgForOf} from "@angular/common";
import {PerfumeService} from "../service/perfume.service";
@Component({
  imports: [PerfumesListItemComponent, NgForOf],
  selector: 'app-perfumes-list',
  standalone: true,
  styleUrl: './perfumes-list.component.css',
  templateUrl: './perfumes-list.component.html'
})

export class PerfumesListComponent{

  perfumes: Perfumes[] = [];

  constructor(private PerfumesService: PerfumeService) {}

  ngOnInit(): void {
    this.loadPerfumes();
  }

  loadPerfumes(): void {
    this.PerfumesService.getPerfumes().subscribe((data) => {
      this.perfumes = data;
    });
  }
}
