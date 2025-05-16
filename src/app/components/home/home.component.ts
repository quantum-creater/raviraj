import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('typedElement') typedElement!: ElementRef;

  ngAfterViewInit(): void {
    if (this.typedElement) {
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
