import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
interface Education {
  degree: string;
  institution: string;
  year: string;
  percentorgpa: string;
  gpa?: string;
  description: string;
}
@Component({
  selector: 'app-education',
  imports: [NgFor, NgIf],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  education: Education[] = [
    {
      degree: 'Matic (10th)',
      institution: 'Jesus & Mary Academy, Darbhanga, Bihar',
      percentorgpa: 'GPA',
      gpa: '7.4',
      year: '2014 - 2015',
      description:
        'Graduated Summa Cum Laude with focus on mathematics and science. Active member of Computer Science Club and Math Honor Society.',
    },
    {
      degree: 'Intermediate',
      institution: 'MMTM, Darbhanga',
      year: '2015 - 2017',
      percentorgpa: 'Percentage',
      gpa: '49%',
      description:
        'Concentrating in Software Engineering with coursework in algorithms, data structures, web development, database systems, and software architecture.',
    },
  ];
}
