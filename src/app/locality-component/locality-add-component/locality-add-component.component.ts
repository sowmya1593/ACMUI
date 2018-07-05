import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-locality-add-component',
  templateUrl: './locality-add-component.component.html',
  styleUrls: ['./locality-add-component.component.css']
})
export class LocalityAddComponentComponent implements OnInit {
  public showForm:string;
  private titus: string;

  constructor( private router: Router) { }

  ngOnInit() {
  }
  
  selectLocal(locality){
   
     this.router.navigate(['locality/option']);

}
}
