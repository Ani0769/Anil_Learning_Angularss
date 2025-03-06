import {Component, Input} from '@angular/core';
import {NgIf, NgStyle} from "@angular/common";


@Component({
  selector: 'app-perfumes-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgStyle
  ],
  templateUrl: './perfumes-list-item.component.html',
  styleUrl: './perfumes-list-item.component.css'
})
export class PerfumesListItemComponent {
  @Input() perfumes?: any;
  @Input() index!: number;

}
