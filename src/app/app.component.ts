import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Perfumes } from "./Shared/perfumes";
import {JsonPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title= 'Royal Perfumes';

  perfumesList: Perfumes[] =
    [
      {id: 1, name: "Oud wood", brand: "Tom ford", price: 400, description: "woody and strong", available: true},
      {id: 2, name: "Le Male", brand: "Jean Paul Gaultier", price: 200, description: "mild and seduction", available: true},
      {id: 3, name: "Spice Bomb", brand: "Viktor and Rolf", price: 200, description: "amber and strong", available: true},
      {id: 4, name: "Homme", brand: "Dior", price: 160, description: "woody taste", available: true},
      {id: 5, name: "Man in Black", brand: "Bvlgari", price: 300, description: "fragnance of flower with agarwood", available: false}
    ]
}

