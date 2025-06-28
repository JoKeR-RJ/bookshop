import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-our-services',
  imports: [RouterModule,CommonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {
 services = [
    {
      icon: 'bi-book',
      iconColor: 'text-info',
      title: 'Compra',
      description: 'Testi scolastici scontati fino al 50%!',
      buttonText: 'Premi qui per Comprare',
      buttonColor: 'primary',
      buttonLink: 'https://wa.me/+393518400386',
      isLink: true
    },
    {
      icon: 'bi-book',
      iconColor: 'text-info',
      title: 'Vendi',
      description: 'Compriamo i tuoi libri inutilizzati!',
      buttonText: 'Premi qui per Vendere',
      buttonColor: 'primary',
      buttonLink: 'https://wa.me/+393518400386',
      isLink: true
    },
    {
      icon: 'bi-book',
      iconColor: 'text-info',
      title: 'Liceo',
      description: 'Testi scolastici <br>scontati del 40%.',
      buttonText: 'Secondaria II Grado',
      buttonColor: 'primary',
      buttonLink: 'https://wa.me/+393518400386',
      isLink: true
    },
    {
      icon: 'bi-book',
      iconColor: 'text-info',
      title: 'Medie',
      description: 'Testi scolastici <br> a metà prezzo!',
      buttonText: 'Secondaria I Grado',
      buttonColor: 'primary',
      buttonLink: 'https://wa.me/+393518400386',
      isLink: true
    },
    {
      icon: 'bi-credit-card',
      iconColor: 'text-success',
      title: 'Come pago?',
      description: 'nel nostro Banco si paga come meglio preferiscie il cliente!!',
      buttonText: 'Paga come vuoi!',
      buttonColor: 'success',
      buttonLink: 'https://wa.me/+393518400386',
      isLink: true
    },
    {
      icon: 'bi-download',
      iconColor: 'text-info',
      title: 'Dove trovo la lista?',
      description: 'non sai dove reperire la tua lista ? <br> premi qui e scarica la tua lista!',
      buttonText: 'Scarica Lista',
      buttonColor: 'primary',
      buttonLink: 'https://www.adozioniaie.it/',
      isLink: true
    },
    {
      icon: 'bi-map',
      iconColor: 'text-success',
      title: 'Dove Trovarci?',
      description: 'ci trovate a Lungotevere Gugliemo Oberdan <br> Banco 11',
      buttonText: 'Clicca qui per le mappe :)',
      buttonColor: 'success',
      buttonLink: 'https://share.google/StGEJM1xddh8advM5',
      isLink: true
    }
  ];
}
