import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
@Component({
  selector: 'app-blog',
  imports: [NgClass, NgFor],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  recentPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with Angular 18',
      excerpt:
        'Learn the new features and improvements in the latest Angular version with practical examples.',
      author: 'Alex Rodriguez',
      date: '2024-06-01',
      readTime: '6 min read',
      category: 'Frontend',
      image: '',
    },
    {
      id: 2,
      title: 'Building Scalable APIs with Node.js',
      excerpt:
        'Best practices for creating robust and scalable backend services using Node.js and Express.',
      author: 'Maria Chen',
      date: '2024-05-28',
      readTime: '10 min read',
      category: 'Backend',
      image: '',
    },
    {
      id: 3,
      title: 'Machine Learning for Beginners',
      excerpt:
        'A comprehensive introduction to machine learning concepts and practical implementation.',
      author: 'David Kumar',
      date: '2024-05-25',
      readTime: '12 min read',
      category: 'AI/ML',
      image: '',
    },
    {
      id: 4,
      title: 'DevOps Best Practices 2024',
      excerpt:
        'Modern DevOps strategies and tools for efficient software development and deployment.',
      author: 'Lisa Thompson',
      date: '2024-05-22',
      readTime: '8 min read',
      category: 'DevOps',
      image: '',
    },
    {
      id: 5,
      title: 'React vs Angular: Complete Comparison',
      excerpt:
        'An in-depth comparison of React and Angular frameworks to help you choose the right one.',
      author: 'James Wilson',
      date: '2024-05-20',
      readTime: '15 min read',
      category: 'Frontend',
      image: '',
    },
    {
      id: 6,
      title: 'Cloud Computing Fundamentals',
      excerpt:
        'Understanding cloud services, deployment models, and choosing the right cloud provider.',
      author: 'Emma Davis',
      date: '2024-05-18',
      readTime: '9 min read',
      category: 'Cloud',
      image: '',
    },
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Sarah Mitchell',
      role: 'Senior Developer at TechCorp',
      content:
        'TechInsights has become my go-to resource for staying updated with the latest development trends. The content is always high-quality and practical.',
      avatar: '',
    },
    {
      name: 'Michael Brown',
      role: 'CTO at StartupXYZ',
      content:
        'The articles here have helped me make informed decisions about technology stack choices for our projects. Highly recommended!',
      avatar: '',
    },
    {
      name: 'Jennifer Lee',
      role: 'Full Stack Developer',
      content:
        "I love how the tutorials are well-structured and easy to follow. It's helped me level up my skills significantly.",
      avatar: '',
    },
  ];

  getCardGradient(category: string): string {
    const gradients: { [key: string]: string } = {
      Frontend: 'bg-primary',
      Backend: 'bg-success',
      'AI/ML': 'bg-info',
      DevOps: 'bg-warning',
      Cloud: 'bg-secondary',
    };
    return gradients[category] || 'bg-primary';
  }

  getCardBackground(category: string): string {
    const backgrounds: { [key: string]: string } = {
      Frontend: 'linear-gradient(135deg, #007bff, #0056b3)',
      Backend: 'linear-gradient(135deg, #28a745, #1e7e34)',
      'AI/ML': 'linear-gradient(135deg, #17a2b8, #117a8b)',
      DevOps: 'linear-gradient(135deg, #ffc107, #e0a800)',
      Cloud: 'linear-gradient(135deg, #6c757d, #545b62)',
    };
    return backgrounds[category] || 'linear-gradient(135deg, #007bff, #0056b3)';
  }

  getCardIcon(category: string): string {
    const icons: { [key: string]: string } = {
      Frontend: 'bi bi-palette',
      Backend: 'bi bi-server',
      'AI/ML': 'bi bi-robot',
      DevOps: 'bi bi-gear',
      Cloud: 'bi bi-cloud',
    };
    return icons[category] || 'bi bi-code-slash';
  }

  getCategoryBadge(category: string): string {
    const badges: { [key: string]: string } = {
      Frontend: 'bg-primary',
      Backend: 'bg-success',
      'AI/ML': 'bg-info',
      DevOps: 'bg-warning text-dark',
      Cloud: 'bg-secondary',
    };
    return badges[category] || 'bg-primary';
  }
}
