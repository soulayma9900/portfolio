import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  highlights = [
    { icon: '📍', label: 'Location', value: 'Tunis, Tunisia' },
    { icon: '🎓', label: 'Education', value: 'M.Sc. Data Science' },
    { icon: '🌐', label: 'Languages', value: 'EN · FR · AR' },
  ];
}
