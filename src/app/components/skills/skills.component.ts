import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

interface Skill {
  name: string;
  percentage: number;
  type: 'success' | 'info' | 'primary' | 'danger' | 'warning'; // restrict to Bootstrap types
}

@Component({
  selector: 'app-skills',
  imports: [NgbProgressbarModule, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  frontendSkills: Skill[] = [
    { name: 'HTML/CSS', percentage: 95, type: 'success' },
    { name: 'JavaScript', percentage: 90, type: 'info' },
    { name: 'React.js', percentage: 85, type: 'primary' },
    { name: 'Angular', percentage: 80, type: 'danger' },
    { name: 'Bootstrap', percentage: 90, type: 'warning' },
  ];

  backendSkills: Skill[] = [
    { name: 'Node.js', percentage: 85, type: 'success' },
    { name: 'Express.js', percentage: 80, type: 'info' },
    { name: 'MongoDB', percentage: 75, type: 'primary' },
    { name: 'SQL', percentage: 70, type: 'danger' },
    { name: 'NestJS', percentage: 65, type: 'warning' },
  ];
}
