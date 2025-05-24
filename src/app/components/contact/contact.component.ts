import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  mydetails = {
    name: 'Ravi Raj',
    dob: '9 March 2000',
    experience: '3+ Years',
    mobile: '+91-9155558993',
    email: 'seraviraj@gmail.com',
    location: 'Darbhanga, Bihar, India',
  };
  socialMedia = {
    facebook: 'https://www.facebook.com/seraviraj',
    instaGram: 'https://www.instagram.com/seraviraj',
    twitter: 'https://x.com/seraviraj',
    linkedIn: 'https://www.linkedin.com/in/seraviraj',
    website: 'https://seraviraj.github.io/raviraj/',
  };
  contactForm!: FormGroup;
  submitted = false;
  loading = false;
  formSuccess = false;
  currentYear = new Date().getFullYear();
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.contactForm.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }
    this.loading = true;
    // Simulate API call
    setTimeout(() => {
      this.loading = false;
      this.formSuccess = true;
      this.contactForm.reset();
      this.submitted = false;
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.formSuccess = false;
      }, 5000);
    }, 1500);
  }
  resetForm(): void {
    this.submitted = false;
    this.contactForm.reset();
  }
}
