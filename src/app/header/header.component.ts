import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { JobboerseService } from '../shared/service/jobboerse.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  beruf = '';
  stadt = '';

  constructor(private jobboerseService: JobboerseService) { }

  searchInitJobs() {
    this.jobboerseService.setFilters({
      'was': 'Softwareentwickler',
      'wo': 'Leipzig',
      'umkreis': 50,
    });
    this.jobboerseService.fetchJobs();
  }

  searchJobs() {
    this.jobboerseService.setFilters({
      'was': this.beruf,
      'wo': this.stadt,
      'umkreis': 50,
    });
    this.jobboerseService.fetchJobs();
  }
}
