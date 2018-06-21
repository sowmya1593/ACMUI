import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-forms',
  templateUrl: './policy-forms.component.html',
  styleUrls: ['./policy-forms.component.css']
})
export class PolicyFormsComponent implements OnInit {
  public policyEntity: string;

  constructor() { }

  ngOnInit() {
  }
  
  policy(policyName) {
      this.policyEntity = policyName;
    }

}
