import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const tsParticles: any;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  roles = ['Data Scientist', 'ML Engineer', 'BI Analyst', 'Data Storyteller'];
  currentRole = 0;
  displayedRole = '';
  typing = true;
  private typeInterval: any;

  ngOnInit(): void {
    this.initParticles();
    this.startTyping();
  }

  startTyping(): void {
    let charIndex = 0;
    const role = this.roles[this.currentRole];

    const type = () => {
      if (charIndex <= role.length) {
        this.displayedRole = role.slice(0, charIndex);
        charIndex++;
        setTimeout(type, 80);
      } else {
        setTimeout(() => this.eraseText(), 2200);
      }
    };
    type();
  }

  eraseText(): void {
    let text = this.roles[this.currentRole];
    const erase = () => {
      if (text.length > 0) {
        text = text.slice(0, -1);
        this.displayedRole = text;
        setTimeout(erase, 45);
      } else {
        this.currentRole = (this.currentRole + 1) % this.roles.length;
        setTimeout(() => this.startTyping(), 300);
      }
    };
    erase();
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  async initParticles(): Promise<void> {
    if (typeof tsParticles === 'undefined') return;

    await tsParticles.load('tsparticles', {
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      particles: {
        number: { value: 55, density: { enable: true, area: 900 } },
        color: { value: '#3b82f6' },
        opacity: { value: 0.18, random: { enable: true, minimumValue: 0.08 } },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 150,
          color: '#3b82f6',
          opacity: 0.12,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'bounce' }
        }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
          onClick: { enable: false }
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.25 } }
        }
      },
      detectRetina: true
    });
  }
}
