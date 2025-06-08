import { Component } from '@angular/core';
import { BlogComponent } from '../../components/blog/blog.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-layout',
  imports: [BlogComponent],
  templateUrl: './blog-layout.component.html',
  styleUrl: './blog-layout.component.css',
})
export class BlogLayoutComponent {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Ravi Blog');
  }
}
