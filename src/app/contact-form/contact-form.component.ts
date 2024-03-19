import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { log } from 'console';
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  log(x: any) {
    console.log(x)
  }

  submit(f: any) {
    console.log(f);
  }
  contactMethod = [
    { id: 1, name: "Emial" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Country" },
  ]
}
