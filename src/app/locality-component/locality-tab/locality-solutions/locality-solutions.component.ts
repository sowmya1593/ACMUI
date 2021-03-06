import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-locality-solutions',
  templateUrl: './locality-solutions.component.html',
  styleUrls: ['./locality-solutions.component.css']
})
export class LocalitySolutionsComponent implements OnInit {


  public showTable: boolean = false;
  public showSection: boolean = false;
  public showForm: boolean = false;
  public showMainTable: boolean = true;
  public invoiceForm: FormGroup;
  public modalForm: FormGroup;
   public modalsForm: FormGroup

  constructor(private _fb: FormBuilder,private modalService: NgbModal) { }

  ngOnInit() {
    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([])
    });
    
    this.modalForm = this._fb.group({
      model:[''],
      serial:['']
    });
    
    this.modalsForm = this._fb.group({
      equipment:[''],
      vendor:[''],
      hosting:['']
    });
  }
  selectLocality(locality) {
    this.showTable = true;
    this.showMainTable = false;

  }
  selectBox(systemType) {
    this.showSection = true;


  }
  
  selectForm(systemType){
  this.showForm =true;
  }
  onUnitsChange(value) {
    console.log(value)
   
     let control = <FormArray>this.invoiceForm.controls['itemRows'];
    
     if(value<control.length){
control.removeAt(control.length-1);
}else{
control.push(this.initItemRows());
}
     
     
     
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
   editClick(): void {
    console.log(this.modalForm.disabled);
    
	  if(this.modalForm.disabled){
	 	 this.modalForm.enable();
	 	 this.modalsForm.enable()
	  }
	  else{
	 	 this.modalForm.disable();
	 	 this.modalsForm.disable();
	  }
  }
  
   open(content) {
   this.modalForm.disable();
   this.modalForm.get('model').setValue("1");
   this.modalService.open(content);
   this.modalsForm.get('equipment').setValue("value");
 

  }
equip(content){
 this.modalsForm.disable();
 this.modalsForm.get('equipment').setValue("value");
}  
}

