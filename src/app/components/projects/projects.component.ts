import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SafeUrlPipe } from './safe-url.pipe';

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  projectUrl: string;
  badge?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgbCarouselModule, NgFor, NgIf, SafeUrlPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  activeTab = 'ALL';

  categories = ['ALL', 'APP', 'CONSTRUCTION', 'INSTITUTE'];

  portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      category: 'CONSTRUCTION',
      title: 'Lorem ipsum dolor sit amet consectetur',
      projectUrl: 'https://vsispl.in',
      badge: 'Construction',
    },
    {
      id: 2,
      category: 'INSTITUTE',
      title: 'Make Paying Easier With Wallet',
      projectUrl: 'https://skycomputereducation.com/homepage',
      badge: 'Institute',
    },
  ];

  get filteredItems(): PortfolioItem[] {
    if (this.activeTab === 'ALL') {
      return this.portfolioItems;
    }
    return this.portfolioItems.filter(
      (item) => item.category === this.activeTab
    );
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
