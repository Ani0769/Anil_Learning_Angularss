import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgIf, NgOptimizedImage, NgStyle, PercentPipe, SlicePipe, UpperCasePipe} from "@angular/common";


@Component({
  selector: 'app-perfumes-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgStyle,
    NgOptimizedImage,
    CurrencyPipe,
    UpperCasePipe,
    PercentPipe,
    SlicePipe
  ],
  templateUrl: './perfumes-list-item.component.html',
  styleUrl: './perfumes-list-item.component.css'
})
export class PerfumesListItemComponent {
  @Input() perfumes?: any;
  @Input() index!: number;

}
