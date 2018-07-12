import { ApiserviceService } from '../../apiservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution-table',
  templateUrl: './solution-table.component.html',
  styleUrls: ['./solution-table.component.css'],
  providers: [ ApiserviceService ]
})
export class SolutionTableComponent implements OnInit {
  public solutions:any;

  constructor(private _apiservice: ApiserviceService) { }

  ngOnInit() {
    this.getSolutions();
    console.log('SolutionTable');
  }
  
  getSolutions()
  {
     this._apiservice.getSolutions()
    .subscribe((data:any) => {
     this.solutions = data.solutionsDTOs;
      console.log(this.solutions);
      console.log(data);
      
    },error => console.log(error));
  }

}
