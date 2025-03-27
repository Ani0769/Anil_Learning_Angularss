import { Component, OnInit } from '@angular/core';
import { Perfumes } from "../Shared/perfumes";
import {PerfumesListItemComponent } from "../perfumes-list-item/perfumes-list-item.component";
import { NgForOf } from "@angular/common";
import { PerfumeService } from "../service/perfume.service";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
@Component({
  imports: [PerfumesListItemComponent, NgForOf],
  selector: 'app-perfumes-list',
  standalone: true,
  styleUrl: './perfumes-list.component.css',
  templateUrl: './perfumes-list.component.html'
})

export class PerfumesListComponent implements OnInit{

  perfumes: Perfumes[] = [];
  selectedPerfumes?: Perfumes;
  constructor(
    private perfumeService: PerfumeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPerfumes();
  }

  loadPerfumes(): void {
    this.perfumeService.getPerfumes().subscribe((data) => {
      this.perfumes = data;
    });
  }

  editPerfume(perfume: Perfumes): void {
     this.router.navigate(['/modify-list-item'], { queryParams: { id: perfume.id } });
}

  deletePerfume(id: number): void {
    this.perfumeService.removePerfumeById(id).subscribe(() => {
      this.loadPerfumes();

    });
  }

}
