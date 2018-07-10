import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-locality-details',
  templateUrl: './locality-details.component.html',
  styleUrls: ['./locality-details.component.css']
})
export class LocalityDetailsComponent implements OnInit {
@ViewChild('form') solutionsForm: NgForm;

  private time;
  constructor() { }

  ngOnInit() {
  }
  setTime() {
    console.log(this.time);
  }
   onSubmit(){
    console.log(this.solutionsForm);
  }
  
}
