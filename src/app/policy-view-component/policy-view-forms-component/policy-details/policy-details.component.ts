import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PolicyGrp, Policy } from '../../../data_modelPolicy';
import { ApiserviceService } from '../../../apiservice.service';

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

  constructor(private modalService: NgbModal, private _apiservice: ApiserviceService) {
  	this.policyDisplay = new PolicyGrp();
  	this.policies = [];
   }
  
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
     /*var dt = new Date(0);
     //console.log(dt.setUTCSeconds(utcSeconds));
        let d = new Date(this.policyDisplay.updatedTs * 1000);
        this.selectDate = {
           year: d.getFullYear(),
          month: d.getMonth() + 1,
          day: d.getDate()
        }*/
      
    },error => console.log(error));	

}

}
