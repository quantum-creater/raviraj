import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  mydetails = {
    name: 'Ravi Raj',
    dob: '9 March 2000',
    experience: '3+ Years',
    mobile: '+91-9155558993',
    email: 'seraviraj@gmail.com',
    location: 'Darbhanga, Bihar, India',
  };
}
