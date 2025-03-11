import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Perfumes} from "../Shared/perfumes";
import {perfumesList} from "../data/mock-content";
@Injectable({
  providedIn: 'root'
})
export class PerfumeService {

  constructor() { }

  getPerfumes(): Observable<Perfumes[]> {
    return of(perfumesList);
  }

  getPerfumeById(id: number): Observable<Perfumes | undefined> {
    const item = perfumesList.find(perfume => perfume.id === id);
    return of(item);
  }

  addPerfume(newPerfume: Perfumes): Observable<Perfumes[]> {
    perfumesList.push(newPerfume);
    return of(perfumesList);
  }

  updatePerfume(updatedPerfume: Perfumes): Observable<Perfumes[]> {
    const index = perfumesList.findIndex(item => item.id === updatedPerfume.id);
    if (index !== -1) {
      perfumesList[index] = updatedPerfume;
    }
    return of(perfumesList);
  }

  deletePerfumeById(id: number): Observable<Perfumes | undefined> {
    const index = perfumesList.findIndex(item => item.id === id);
    if (index !== -1) {
      const removedItem = perfumesList.splice(index, 1)[0];
      return of(removedItem);
    }
    return of(undefined);
  }
}
