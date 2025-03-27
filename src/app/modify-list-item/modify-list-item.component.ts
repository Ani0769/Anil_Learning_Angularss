import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { PerfumeService } from '../service/perfume.service';
import { Perfumes } from '../Shared/perfumes';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modify-list-item',
  templateUrl: './modify-list-item.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./modify-list-item.component.css']
})
export class ModifyListItemComponent implements OnInit {
  perfumeForm: FormGroup;
  currentPerfumeId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private perfumeService: PerfumeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.perfumeForm = this.fb.group({
      id: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      name: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      available: [false],
      imgSrc: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.currentPerfumeId = +id;
      this.loadPerfumeForEditing();
    }
  }

  loadPerfumeForEditing(): void {
    if (this.currentPerfumeId !== null) {
      this.perfumeService.getPerfumeById(this.currentPerfumeId).subscribe((perfume: Perfumes | undefined) => {
        if (perfume) {
          this.perfumeForm.patchValue(perfume);
        } else {
          alert('Perfume not found!');
        }
      });
    }
  }

  onSubmit(): void {
    if (this.perfumeForm.valid) {
      const perfumeData: Perfumes = this.perfumeForm.value;

      if (this.currentPerfumeId === null) {

        this.perfumeService.addPerfume(perfumeData).subscribe(() => {
          this.router.navigate(['/perfumes-list']);
        });
      } else {

        this.perfumeService.updatePerfume(perfumeData).subscribe(() => {
          this.router.navigate(['/perfumes-list']);
        });
      }
    }
  }

  resetForm(): void {
    this.perfumeForm.reset();
    this.currentPerfumeId = null;
  }
}
