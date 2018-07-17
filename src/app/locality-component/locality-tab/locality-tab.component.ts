import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-locality-tab',
  templateUrl: './locality-tab.component.html',
  styleUrls: ['./locality-tab.component.css']
})
export class LocalityTabComponent implements OnInit {
loc:any;
  constructor(private route: ActivatedRoute) {
   this.route.firstChild.params.subscribe(params => {
    this.loc = params['Locality'];
    
        
   }); }

  ngOnInit() {
  }

}
