import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locality-add-component',
  templateUrl: './locality-add-component.component.html',
  styleUrls: ['./locality-add-component.component.css']
})
export class LocalityAddComponentComponent implements OnInit {
  public showForm:string;

  constructor() { }

  ngOnInit() {
  }
  
  selectLocality(locality){
    this.showForm = locality;

}
}
