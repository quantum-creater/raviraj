import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
interface Certificate {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

@Component({
  selector: 'app-certificates',
  imports: [NgIf, NgFor],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
})
export class CertificatesComponent {
  certificates: Certificate[] = [
    {
      name: 'Angular Certified Developer',
      issuer: 'Google',
      date: 'March 2024',
      credentialId: 'ANG-2024-001',
    },

    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'November 2023',
    },

    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: 'July 2023',
    },
    {
      name: 'Git and GitHub Essentials',
      issuer: 'Microsoft Learn',
      date: 'May 2023',
    },
  ];
}
