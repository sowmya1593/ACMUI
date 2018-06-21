import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-view-forms-component',
  templateUrl: './policy-view-forms-component.component.html',
  styleUrls: ['./policy-view-forms-component.component.css']
})
export class PolicyViewFormsComponentComponent implements OnInit {
  public definitive: string;
  public policy: boolean=false;

  constructor() { }

  ngOnInit() {
  }
  
  
  selectDefinitive(definitive){
    this.definitive = definitive;

}
  
  selectType(policy){
    this.policy=true;
}
}
