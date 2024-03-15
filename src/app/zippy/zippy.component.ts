import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.css'
})
export class ZippyComponent {
  [x: string]: any;
  @Input('title') title: string | undefined;

  isExpended: boolean = true;

  toggle() {
    this.isExpended = !this.isExpended;
  }

}
