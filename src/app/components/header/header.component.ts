import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [NgFor, NgbCollapseModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuCollapsed = true;
  activeSection: string = 'home';

  navItems = [
    { name: 'Home', link: 'home' },
    { name: 'About', link: 'about' },
    { name: 'Education', link: 'education' },
    { name: 'Skills', link: 'skills' },
    { name: 'Services', link: 'services' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact', link: 'contact' },
  ];

  toggleNavigation(): void {
    if (window.innerWidth < 992) {
      this.isMenuCollapsed = true;
    }
  }

  setActiveOption(link: string): void {
    this.activeSection = link;
  }
}
