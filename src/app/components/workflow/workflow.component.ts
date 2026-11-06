import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowStep } from '../../models/portfolio.models';
import { PortfolioDataService } from '../../models/portfolio-data.service';

@Component({
  selector: 'app-workflow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
  steps: WorkflowStep[] = [];
  activeStep: number | null = null;

  constructor(private data: PortfolioDataService) {}

  ngOnInit(): void {
    this.steps = this.data.getWorkflowSteps();
  }

  setActive(i: number): void {
    this.activeStep = this.activeStep === i ? null : i;
  }
}
