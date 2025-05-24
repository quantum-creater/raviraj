import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
interface NavItem {
  name: string;
  link: string;
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
  imports: [NgFor, NgbCollapseModule, NgIf, NgbDropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuCollapsed = true;
  activeSection = '';

  // Regular navigation items (before dropdowns)
  regularNavItems: NavItem[] = [
    { name: 'Home', link: 'home' },
    { name: 'About', link: 'about' },
  ];

  // Dropdown menus configuration
  dropdownMenus: DropdownMenu[] = [
    {
      name: 'Portfolio',
      items: [
        { name: 'Education', link: 'education' },
        { name: 'Skills', link: 'skills' },
        { name: 'Certification', link: 'certification' },
      ],
    },
  ];

  // Navigation items after dropdowns
  endNavItems: NavItem[] = [
    { name: 'Services', link: 'services' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact', link: 'contact' },
  ];

  setActiveOption(section: string) {
    this.activeSection = section;
  }

  toggleNavigation() {
    this.isMenuCollapsed = true;
  }
}
