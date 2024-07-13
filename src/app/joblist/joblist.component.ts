import { Component } from '@angular/core';
import { JobboerseService } from '../shared/service/jobboerse.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-joblist',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './joblist.component.html',
  styleUrl: './joblist.component.scss'
})
export class JoblistComponent {

  constructor(public jobboerseService: JobboerseService) { }

}
