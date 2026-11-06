import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts = [
    {
      icon: 'email',
      label: 'Email',
      value: 'soulayma.hrira@iit.ens.tn',
      href: 'mailto:soulayma.hrira@iit.ens.tn',
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/soulayma-hrira-161a97272',
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: 'github.com/soulaymahrira7-bit',
      href: 'https://github.com/soulaymahrira7-bit',
    }
  ];
}
