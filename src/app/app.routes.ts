import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { BlogLayoutComponent } from './layouts/blog-layout/blog-layout.component';

export const routes: Routes = [
  { path: '', component: MainLayoutComponent },
  {
    path: 'blog',
    component: BlogLayoutComponent,
  },
  //   { path: '**', component: PageNotFoundComponent },
];
