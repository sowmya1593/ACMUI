import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-locality-solutionstablelink',
  templateUrl: './locality-solutionstablelink.component.html',
  styleUrls: ['./locality-solutionstablelink.component.css']
})
export class LocalitySolutionstablelinkComponent implements OnInit {
 public invoiceForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([])
    });
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
