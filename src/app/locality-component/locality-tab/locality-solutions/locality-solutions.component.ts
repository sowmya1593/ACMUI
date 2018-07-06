import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-locality-solutions',
  templateUrl: './locality-solutions.component.html',
  styleUrls: ['./locality-solutions.component.css']
})
export class LocalitySolutionsComponent implements OnInit {


public showTable:boolean=false;
public showSection:boolean=false;
public showMainTable:boolean=true;
  constructor(private router: Router) { }

  ngOnInit() {
  }
selectLocality(locality){
   
   
     this.showTable=true;
     this.showMainTable=false;

}
selectBox(systemType){
   this.showSection=true;
     this.router.navigate(['locality/option/solutions']);

}
}
