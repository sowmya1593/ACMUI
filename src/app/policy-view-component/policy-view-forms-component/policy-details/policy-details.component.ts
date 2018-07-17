import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PolicyGrp, Policy } from '../../../data_modelPolicy';
import { ApiserviceService } from '../../../apiservice.service';
import { IMyDate } from 'mydatepicker';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css'],
  providers: [ ApiserviceService ]
})
export class PolicyDetailsComponent implements OnInit {
  policyDisplay: PolicyGrp;
  policies: Policy[];
  plus=true;
   public reviewDate: string;
    public selectDate: IMyDate = null;
    public reviewDateNext: string;

  constructor(private modalService: NgbModal, private _apiservice: ApiserviceService) {
  	this.policyDisplay = new PolicyGrp();
  	this.policies = [];
   }
  
  open(content) {
   this.modalService.open(content);
  }
  
  show(control) {
   this.modalService.open(control);
  }
  
  changeButton(){
    this.plus=false;
  }
  
  close(){
    this.plus=true;
  }

  ngOnInit() {
  	this.fetchPolicies(1);
  }
  
  fetchPolicies(id){
	this._apiservice.fetchPolicies(id)
    .subscribe((data: any) => {
    	this.policyDisplay=data.policyGrpDTO;
    	this.policies = data.policyDTOs;
    	console.log(this.policies);
    	console.log(this.policyDisplay);
      	console.log(this.policyDisplay.updatedBy);
      	console.log(this.policyDisplay.updatedTs);
      	var date = this.policyDisplay.updatedTs;
     var dt = new Date(0);
     //console.log(dt.setUTCSeconds(utcSeconds));
        let lastReviewDate = new Date(this.policyDisplay.lastReviewDate);
        let nextReviewDate = new Date(this.policyDisplay.policyReviewDate);
        this.selectDate = {
           year: lastReviewDate.getFullYear(),
          month: lastReviewDate.getMonth() + 1,
          day: lastReviewDate.getDate()
        }
        this.reviewDate = lastReviewDate.getMonth()+"/"+lastReviewDate.getDate()+"/"+lastReviewDate.getFullYear();
        this.reviewDateNext = nextReviewDate.getMonth()+"/"+nextReviewDate.getDate()+"/"+nextReviewDate.getFullYear();
        console.log(this.reviewDate);
      
    },error => console.log(error));	

}

}
