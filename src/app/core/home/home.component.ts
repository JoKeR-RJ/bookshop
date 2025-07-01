import { Component } from '@angular/core';
import { JumbotronComponent } from "../../features/jumbotron/jumbotron.component";
import { HeaderComponent } from "../../features/header/header.component";
import { AboutUsComponent } from "../../features/about-us/about-us.component";
import { OurServicesComponent } from "../../features/our-services/our-services.component";
import { ContactsComponent } from "../../features/contacts/contacts.component";
import { CreditsDevComponent } from "../../features/credits-dev/credits-dev.component";
import { CardGalleryComponent } from "../../features/card-gallery/card-gallery.component";

@Component({
  selector: 'app-home',
  imports: [JumbotronComponent, HeaderComponent, AboutUsComponent, OurServicesComponent, ContactsComponent, CreditsDevComponent, CardGalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
