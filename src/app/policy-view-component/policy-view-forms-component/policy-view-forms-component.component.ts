import { ApiserviceService } from '../../apiservice.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-policy-view-forms-component',
  templateUrl: './policy-view-forms-component.component.html',
  styleUrls: ['./policy-view-forms-component.component.css'],
  providers: [ ApiserviceService ]
})
export class PolicyViewFormsComponentComponent implements OnInit {
  public definitive: string;
  public policy: boolean=false;
  public policyData: any;

  constructor(private _apiservice: ApiserviceService) { }

  ngOnInit() {
  this.fetchPolicies(2);
  }
  
  
  selectDefinitive(definitive){
    this.definitive = definitive;
    console.log(definitive);

}

fetchPolicies(id){
	this._apiservice.fetchPolicies(id)
    .subscribe((data:any) => {
     this.policyData = data.policyGrpDTO;
      console.log(this.policyData);
      console.log(data);
      
    },error => console.log(error));	

}
  
  selectType(policy){
    this.policy =true;
}
}
