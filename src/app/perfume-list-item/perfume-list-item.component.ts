import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-perfumes-list-item',
  standalone: true,
  imports: [],
  templateUrl: './perfumes-list-item.component.html',
  styleUrl: './perfumes-list-item.component.css'
})
export class PerfumesListItemComponent {
  @Input() perfumes?: any;

}
