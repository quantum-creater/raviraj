import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
interface NavItem {
  name: string;
  link: string;
  route?: string[];
  id?: string;
  bclass: string;
}

interface DropdownItem {
  name: string;
  link: string;
  divider?: boolean;
}

interface DropdownMenu {
  name: string;
  items: DropdownItem[];
}

@Component({
  selector: 'app-header',
  imports: [
    NgFor,
    NgbCollapseModule,
    NgIf,
    NgbDropdownModule,
    NgClass,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuCollapsed = true;
  activeSection = '';

  // Regular navigation items (before dropdowns)
  regularNavItems: NavItem[] = [
    { name: 'Home', link: 'home', bclass: '' },
    { name: 'About', link: 'about', bclass: '' },
  ];

  // Dropdown menus configuration
  dropdownMenus: DropdownMenu[] = [
    {
      name: 'Portfolio',
      items: [
        { name: 'Education', link: 'education' },
        { name: 'Skills', link: 'skills' },
      ],
    },
  ];

  // Navigation items after dropdowns
  endNavItems: NavItem[] = [
    { name: 'Services', link: '#services', bclass: '' },
    { name: 'Projects', link: '#projects', bclass: '' },
    { name: 'Contact', link: '#contact', bclass: '' },
    { name: 'Blog', link: '/blog', bclass: 'bg-primary rounded' },
  ];

  setActiveOption(section: string) {
    this.activeSection = section;
  }

  toggleNavigation() {
    this.isMenuCollapsed = true;
  }
}
