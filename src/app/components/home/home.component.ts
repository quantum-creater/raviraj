import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  socialMedia = {
    facebook: 'https://www.facebook.com/seraviraj',
    instaGram: 'https://www.instagram.com/seraviraj',
    twitter: 'https://x.com/seraviraj',
    linkedIn: 'https://www.linkedin.com/in/seraviraj',
    website: 'https://seraviraj.github.io/raviraj/',
  };
  @ViewChild('typedElement') typedElement!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && this.typedElement) {
      const typed = new Typed(this.typedElement.nativeElement, {
        strings: [
          'Full Stack Developer',
          'Frontend Developer',
          'Backend Developer',
          'Web Designer',
        ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });
    }
  }
}
