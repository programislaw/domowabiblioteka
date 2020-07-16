import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PostComponent } from './post/post.component';
import { LandingComponent } from './landing/landing.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LibraryComponent } from './library/library.component';
import { PricelistComponent } from './pricelist/pricelist.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        PostComponent,
        GalleryComponent,
        BlogComponent,
        LibraryComponent,
        PricelistComponent,
        LandingComponent,
        SignupComponent,
        ProfileComponent
    ]
})
export class ExamplesModule { }
