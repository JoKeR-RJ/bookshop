import { Routes } from '@angular/router';
import { JumbotronComponent } from './features/jumbotron/jumbotron.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { OurServicesComponent } from './features/our-services/our-services.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { CreditsDevComponent } from './features/credits-dev/credits-dev.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { HomeComponent } from './core/home/home.component';
import { CardGalleryComponent } from './features/card-gallery/card-gallery.component';

export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'}, // landing
    {path:'home', component: HomeComponent},

    {path:'jumbotron', component:JumbotronComponent},
    {path:'contacts', component:ContactsComponent},
    {path:'about-us',component:AboutUsComponent},
    {path:'card-gallery',component:CardGalleryComponent},
    {path:'our-services',component:OurServicesComponent},
    // {path:'carousel-pics',component:CarouselPicsComponent},
    {path:'credits-dev',component:CreditsDevComponent},

    {path: '**', component: PageNotFoundComponent }, // 404 page


];
