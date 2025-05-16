import { NgFor } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [NgFor, NgbCollapseModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuCollapsed = true;
  activeSection = 'home';

  navItems = [
    { name: 'Home', link: 'home' },
    { name: 'About', link: 'about' },
    { name: 'Education', link: 'education' },
    { name: 'Skills', link: 'skills' },
    { name: 'Services', link: 'services' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact', link: 'contact' },
  ];

  ngOnInit(): void {
    this.checkActiveSection();
  }

  toggleNavigation(): void {
    if (window.innerWidth < 992) {
      this.isMenuCollapsed = true;
    }
  }

  @HostListener('window:scroll')
  checkActiveSection(): void {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionId = section.getAttribute('id') || '';

      if (window.scrollY >= sectionTop) {
        this.activeSection = sectionId;
      }
    });
  }
}
