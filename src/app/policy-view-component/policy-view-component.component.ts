import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-policy-view-component',
  templateUrl: './policy-view-component.component.html',
  styleUrls: ['./policy-view-component.component.css']
})
export class PolicyViewComponentComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  constructor() { }

  ngOnInit() {
  }
  

}
