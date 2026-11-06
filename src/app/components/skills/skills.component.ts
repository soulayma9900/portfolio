import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill, SkillCategory } from '../../models/portfolio.models';
import { PortfolioDataService } from '../../models/portfolio-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  allSkills: Skill[] = [];
  filteredSkills: Skill[] = [];
  activeCategory: SkillCategory = 'All';

  categories: SkillCategory[] = ['All', 'Languages', 'ML & AI', 'Data & BI', 'Tools'];

  constructor(private data: PortfolioDataService) {}

  ngOnInit(): void {
    this.allSkills = this.data.getSkills();
    this.filteredSkills = [...this.allSkills];
  }

  setCategory(cat: SkillCategory): void {
    this.activeCategory = cat;
    this.filteredSkills = cat === 'All'
      ? [...this.allSkills]
      : this.allSkills.filter(s => s.category === cat);
  }
}
