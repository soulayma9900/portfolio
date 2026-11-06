import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/portfolio.models';
import { PortfolioDataService } from '../../models/portfolio-data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private data: PortfolioDataService) {}

  ngOnInit(): void {
    this.experiences = this.data.getExperiences();
    this.experiences[0].expanded = true;
  }

  toggle(exp: Experience): void {
    exp.expanded = !exp.expanded;
  }
}
