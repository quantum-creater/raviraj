import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  imports: [NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'bxl-react',
      title: 'Frontend Development',
      description:
        'Creating responsive and interactive user interfaces using modern frameworks like React and Angular.',
    },
    {
      icon: 'bxl-nodejs',
      title: 'Backend Development',
      description:
        'Building robust server-side applications with Node.js, Express, and database integration.',
    },
    {
      icon: 'bx-mobile-alt',
      title: 'Responsive Web Design',
      description:
        'Designing websites that look great on all devices from desktops to smartphones.',
    },

    {
      icon: 'bx-code-block',
      title: 'API Development',
      description:
        'Creating RESTful APIs and GraphQL endpoints for seamless client-server communication.',
    },
  ];
}
