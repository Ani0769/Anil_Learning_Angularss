import {Component, Input} from '@angular/core';
import {NgIf, NgOptimizedImage, NgStyle} from "@angular/common";


@Component({
  selector: 'app-perfumes-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgStyle,
    NgOptimizedImage
  ],
  templateUrl: './perfumes-list-item.component.html',
  styleUrl: './perfumes-list-item.component.css'
})
export class PerfumesListItemComponent {
  @Input() perfumes?: any;
  @Input() index!: number;

}
