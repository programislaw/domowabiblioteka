import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { GalleryComponent } from './examples/gallery/gallery.component';
import { BlogComponent } from './examples/blog/blog.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { LibraryComponent } from './examples/library/library.component';
import { PricelistComponent } from './examples/pricelist/pricelist.component';

const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'gallery',          component: GalleryComponent },
    { path: 'blog',             component: BlogComponent },
    { path: 'library',          component: LibraryComponent },
    { path: 'pricelist',        component: PricelistComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
