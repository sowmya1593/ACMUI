import { ApiserviceService } from '../../apiservice.service';
import { Component, OnInit } from '@angular/core';
import { PolicyGrp } from '../../data_modelPolicy';
import { FilterPipe } from '../../convertDate.pipe';
import { IMyDate } from 'mydatepicker';


@Component({
  selector: 'app-policy-view-forms-component',
  templateUrl: './policy-view-forms-component.component.html',
  styleUrls: ['./policy-view-forms-component.component.css'],
  providers: [ ApiserviceService ]
})
export class PolicyViewFormsComponentComponent implements OnInit {
  policyDisplay: PolicyGrp;
  public definitive: boolean;
  public policy: boolean;
  public policyData: any;
  public auditTypes: any;
  public policyTypes: any;
  public selectDate: IMyDate = null;
  public date: string;

  constructor(private _apiservice: ApiserviceService) { 
  	this.policyDisplay = new PolicyGrp();
  }

  ngOnInit() {
  this.fetchPolicies(1);
  this.showDropdown();
  }
  
  
selectType(policy){
  if(policy === 'Choose...')
  { this.policy = false;
  }
  else{
    this.policy =true;
    }
}

showDropdown()
{

this._apiservice.getAuditTypes()
.subscribe((data: any) => {
this.auditTypes = data;
},error => { console.log(error);});


}

selectDefinitive(auditID)
	
{

if(auditID === 'Choose...')
{
this.definitive = false
}
else {
this.definitive =  true;
}

this._apiservice.getPolicyGroup(auditID)
.subscribe((data: any) => {
this.policyTypes = data;
},error => {console.log(error)});

}


fetchPolicies(id){
	this._apiservice.fetchPolicies(id)
    .subscribe((data: any) => {
    	this.policyDisplay=data.policyGrpDTO;
    	//console.log(this.policies);
    	console.log(this.policyDisplay);
      	console.log(this.policyDisplay.updatedBy);
      	console.log(this.policyDisplay.updatedTs);
      	var date = this.policyDisplay.updatedTs;
     var dt = new Date(0);
     //console.log(dt.setUTCSeconds(utcSeconds));
        let d = new Date(this.policyDisplay.updatedTs);
        this.selectDate = {
           year: d.getFullYear(),
          month: d.getMonth() + 1,
          day: d.getDate()
        }
        this.date = d.getMonth()+"/"+d.getDate()+"/"+d.getFullYear();
        console.log(this.date);
        console.log(this.selectDate.year);
        console.log(this.selectDate.month);
        console.log(this.selectDate.day);
    },error => console.log(error));	

}
}
