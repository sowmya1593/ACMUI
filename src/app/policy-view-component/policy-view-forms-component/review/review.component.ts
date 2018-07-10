import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @ViewChild('form') popUpForm: NgForm;
  plus=true;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  
  open(content) {
   this.modalService.open(content);
   //this.plus=false;

  }
  
  changeButton(){
    this.plus=false;
  }
  
  onSubmit(){
    console.log(this.popUpForm);
  }

}
