import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  codeLink: string;
}

@Component({
  selector: 'app-projects',
  imports: [NgbCarouselModule, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projectHighlights: Project[] = [
    {
      image: 'assets/images/project1.jpg',
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with product catalog, cart functionality, payment processing, and user authentication. Includes admin dashboard for product management.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
      liveLink: 'https://project1.example.com',
      codeLink: 'https://github.com/raviraj/project1',
    },
    {
      image: 'assets/images/project2.jpg',
      title: 'Task Management System',
      description:
        'A collaborative task management application with real-time updates, team workspaces, and progress tracking. Features include drag-and-drop boards and time tracking.',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'RxJS'],
      liveLink: 'https://project2.example.com',
      codeLink: 'https://github.com/raviraj/project2',
    },
    {
      image: 'assets/images/project3.jpg',
      title: 'Social Media Dashboard',
      description:
        'An analytics dashboard for social media accounts that aggregates metrics from multiple platforms. Provides insights and visualization of engagement data.',
      technologies: ['Vue.js', 'D3.js', 'Node.js', 'MongoDB'],
      liveLink: 'https://project3.example.com',
      codeLink: 'https://github.com/raviraj/project3',
    },
  ];

  projects: Project[] = [
    {
      image: 'assets/images/project4.jpg',
      title: 'Weather App',
      description:
        'Real-time weather forecasting application with location detection.',
      technologies: ['JavaScript', 'OpenWeather API', 'Bootstrap'],
      liveLink: 'https://project4.example.com',
      codeLink: 'https://github.com/raviraj/project4',
    },
    {
      image: 'assets/images/project5.jpg',
      title: 'Recipe Finder',
      description:
        'Search and save recipes based on available ingredients or dietary preferences.',
      technologies: ['React', 'Firebase', 'Food API'],
      liveLink: 'https://project5.example.com',
      codeLink: 'https://github.com/raviraj/project5',
    },
    {
      image: 'assets/images/project6.jpg',
      title: 'Budget Tracker',
      description:
        'Personal finance application to track income, expenses, and savings goals.',
      technologies: ['Angular', 'Chart.js', 'LocalStorage'],
      liveLink: 'https://project6.example.com',
      codeLink: 'https://github.com/raviraj/project6',
    },
    {
      image: 'assets/images/project7.jpg',
      title: 'Movie Database',
      description:
        'Browse and search movies with ratings, reviews, and recommendations.',
      technologies: ['React', 'TMDB API', 'CSS Grid'],
      liveLink: 'https://project7.example.com',
      codeLink: 'https://github.com/raviraj/project7',
    },
    {
      image: 'assets/images/project8.jpg',
      title: 'Fitness Tracker',
      description:
        'Log workouts and track fitness progress with visual analytics.',
      technologies: ['Angular', 'TypeScript', 'Chart.js'],
      liveLink: 'https://project8.example.com',
      codeLink: 'https://github.com/raviraj/project8',
    },
    {
      image: 'assets/images/project9.jpg',
      title: 'Chat Application',
      description:
        'Real-time messaging app with private chats and group channels.',
      technologies: ['React', 'Socket.io', 'Express'],
      liveLink: 'https://project9.example.com',
      codeLink: 'https://github.com/raviraj/project9',
    },
  ];
}
