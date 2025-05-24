import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  imports: [NgbProgressbarModule, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills: Skill[] = [
    // Programming Languages
    { name: 'JavaScript', level: 90, category: 'Programming Languages' },
    { name: 'TypeScript', level: 70, category: 'Programming Languages' },
    { name: 'Python', level: 80, category: 'Programming Languages' },
    { name: 'Java', level: 70, category: 'Programming Languages' },
    { name: 'C++', level: 80, category: 'Programming Languages' },

    // Web Technologies
    { name: 'HTML/CSS', level: 92, category: 'Frontend Technologies' },
    { name: 'Bootstrap', level: 90, category: 'Frontend Technologies' },
    { name: 'Angular', level: 88, category: 'Frontend Technologies' },
    { name: 'React', level: 82, category: 'Frontend Technologies' },
    { name: 'Tailwind CSS', level: 85, category: 'Frontend Technologies' },

    // Tools & Databases
    { name: 'Node.js', level: 75, category: 'Backend & Tools' },
    { name: 'Express / MongoDB', level: 75, category: 'Backend & Tools' },
    { name: 'NestJS / Mongoose', level: 70, category: 'Backend & Tools' },
    { name: 'PHP / MySQL', level: 80, category: 'Backend & Tools' },
    { name: 'Git/GitHub', level: 75, category: 'Backend & Tools' },
  ];
  getSkillCategories(): string[] {
    return [...new Set(this.skills.map((skill) => skill.category))];
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter((skill) => skill.category === category);
  }
}
