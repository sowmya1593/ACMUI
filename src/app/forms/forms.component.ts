import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators,FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  
  @Output() submitClick = new EventEmitter<object>();
   private editVendorForm: FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
   this.createForm();
  }
  
   createVendor(value){
   console.log(this.editVendorForm.value);
    this.submitClick.emit(value);
    console.log(value);
  }



  createForm() {
    this.editVendorForm = this.fb.group({
      name: ['', Validators.required],
      vendorAddress: this.fb.group({
        streetName: '',
        city: '',
        state: '',
        zipcode: ''
      }),
      vendorContact: this.fb.group({
        firstName: '',
        lastName: '',
        emailId: '',
        phoneNumber: ''
      }),
    });
  }

}
