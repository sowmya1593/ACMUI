import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-locality-solutions',
  templateUrl: './locality-solutions.component.html',
  styleUrls: ['./locality-solutions.component.css']
})
export class LocalitySolutionsComponent implements OnInit {


  public showTable: boolean = false;
  public showSection: boolean = false;
  public showMainTable: boolean = true;
  public invoiceForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([])
    });
  }
  selectLocality(locality) {
    this.showTable = true;
    this.showMainTable = false;

  }
  selectBox(systemType) {
    this.showSection = true;


  }
  onUnitsChange(value) {
    console.log(value)
   
     let control = <FormArray>this.invoiceForm.controls['itemRows'];
     control.push(this.initItemRows());
     
     
  }

  initItemRows() {
    return this._fb.group({
      one: [''],
      two: ['']
    });
  }
  onSubmit() {
    console.log(this.invoiceForm.value);
  }
}
