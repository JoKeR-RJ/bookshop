import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-gallery',
  imports: [CommonModule,RouterModule],
  templateUrl: './card-gallery.component.html',
  styleUrl: './card-gallery.component.scss'
})
export class CardGalleryComponent {
  portfolioItems = [
    { src: '/img/gallery/1.jpg', title: 'Banco11', alt: 'Project 1' },
    { src: '/img/gallery/2.jpg', title: 'Banco11', alt: 'Project 3' },
    { src: '/img/gallery/3.jpg', title: 'Banco11', alt: 'Project 3' },
    { src: '/img/gallery/4.jpg', title: 'Banco11', alt: 'Project 3' },
    { src: '/img/gallery/5.jpg', title: 'Banco11', alt: 'Project 3' },
    { src: '/img/gallery/clients1.jpg', title: 'Banco11', alt: 'Project 3' },
    { src: '/img/gallery/clients2.jpg', title: 'Banco11', alt: 'Project 3' },
    { src: '/img/gallery/van.jpg', title: 'Banco11', alt: 'Project 3' },
  ];

}
