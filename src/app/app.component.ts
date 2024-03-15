import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputFormatterDirective } from './input-formatter.directive';
import { ZippyComponent } from "./zippy/zippy.component";

// import { TitleCasePipe } from "./title-case.pipe";
// import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, FormsModule, CommonModule, InputFormatterDirective, ZippyComponent]
})
export class AppComponent {
  onAdd() {
    this.courses.push({ id: 4, name: "courses5" })
  }
  courses: { id: number; name: string; }[] = [];
  onLoadCourse() {
    this.courses = [
      { id: 0, name: "course1" },
      { id: 1, name: "course2" },
      { id: 2, name: "course3" },
      { id: 3, name: "course4" },
    ]

  }
}
