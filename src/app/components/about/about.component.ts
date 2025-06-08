import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [NgClass],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  profileData = {
    name: 'Ravi Raj',
    birthday: '9 March 2000',
    age: 24,
    website: 'www.example.com',
    degree: 'Graduation',
    phone: '+91-9155558993',
    email: 'seraviraj@gmail.com',
    city: 'Darbhanga, Bihar, India',
    freelance: 'Available',
  };
}
