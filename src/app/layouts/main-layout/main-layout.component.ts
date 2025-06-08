import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeComponent } from '../../components/home/home.component';
import { AboutComponent } from '../../components/about/about.component';
import { EducationComponent } from '../../components/education/education.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ServicesComponent } from '../../components/services/services.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-layout',
  imports: [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Ravi Raj');
  }
}
