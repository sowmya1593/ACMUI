import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent implements OnInit {
  plus=true;

  constructor(private modalService: NgbModal) { }
  
  open(content) {
   this.modalService.open(content);
  }
  
  changeButton(){
    this.plus=false;
  }
  
  close(){
    this.plus=true;
  }

  ngOnInit() {
  }

}
