import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  // Dati per i pulsanti social
  socialButtons = [
    { href: 'tel:+393518400386', icon: 'bi bi-telephone-fill' },
    { href: 'mailto:libribanco11@outlook.com', icon: 'bi bi-envelope-fill' },
    { href: 'https://www.instagram.com/libri.banco.11/', icon: 'bi bi-instagram', target: '_blank' },
    { href: 'https://wa.me/+393518400386', icon: 'bi bi-whatsapp', target: '_blank' }
  ];

  // Dati per le card dei contatti
  bobContact = {
    name: 'Bob',
    description: 'Premi qui per inviare un messaggio a Bob direttamente su WhatsApp.'
  };

  silviaContact = {
    name: 'Silvia',
    description: 'Premi qui per inviare un messaggio a Silvia direttamente su WhatsApp.'
  };

  // Dati per le informazioni testuali
  contactInfo = [
    { href: 'mailto:libribanco11@outlook.com', icon: 'bi bi-envelope-fill', label: 'Email', value: 'libribanco11@outlook.com' },
    { href: 'tel:+391234567890', icon: 'bi bi-telephone-fill', label: 'Telefono', value: '+39 123 456 7890' },
    { href: 'https://www.instagram.com/libribanco11', icon: 'bi bi-instagram', label: 'Instagram', value: '@libribanco11', target: '_blank' },
    { href: 'https://wa.me/391234567890', icon: 'bi bi-whatsapp', label: 'WhatsApp', value: 'Chatta con noi', target: '_blank' }
  ];

  // --------------------------------------------------
  contactUs: FormGroup;
  uploadedFileName = '';

  constructor(private fb: FormBuilder) {
    this.contactUs = new FormGroup({
      nome: fb.control('', Validators.required),
      cognome: fb.control('', Validators.required),
      telefono: fb.control('', [
        Validators.required,
        Validators.pattern(/^\+?[0-9\s\-]{7,15}$/),
      ]),
      email: fb.control('', [
        Validators.required,
        Validators.email,
      ]),
      messaggio: fb.control('', Validators.required),
      file: fb.control(null)
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];
    if (file) {
      this.contactUs.get('file')?.setValue(file);
      this.uploadedFileName = file.name;
    }
  }

  submit() {
    if (this.contactUs.valid) {
      console.log('Messaggio inviato!', this.contactUs.value);
      // Aggiungi qui la tua logica di invio, ad esempio una chiamata HTTP
    // } else {
    //   this.contactUs.markAllAsTouched();
    // }
  }
  }
}
