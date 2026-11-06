import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectCategory } from '../../models/portfolio.models';
import { PortfolioDataService } from '../../models/portfolio-data.service';
import { ProjectModalComponent } from '../shared/project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  allProjects: Project[] = [];
  filteredProjects: Project[] = [];
  activeCategory: ProjectCategory = 'All';
  selectedProject: Project | null = null;

  categories: ProjectCategory[] = ['All', 'Machine Learning', 'Deep Learning', 'BI'];

  constructor(private data: PortfolioDataService) {}

  ngOnInit(): void {
    this.allProjects = this.data.getProjects();
    this.filteredProjects = [...this.allProjects];
  }

  setCategory(cat: ProjectCategory): void {
    this.activeCategory = cat;
    this.filteredProjects = cat === 'All'
      ? [...this.allProjects]
      : this.allProjects.filter(p => p.category === cat);
  }

  openModal(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }
}
