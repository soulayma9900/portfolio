import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certificate } from '../../models/portfolio.models';
import { PortfolioDataService } from '../../models/portfolio-data.service';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  certificates: Certificate[] = [];

  constructor(private data: PortfolioDataService) {}

  ngOnInit(): void {
    this.certificates = this.data.getCertificates();
  }
}
