import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @ViewChild('form') vendorsForm: NgForm;

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(){
    console.log(this.vendorsForm);
  }

}
