import { ApiserviceService } from '../apiservice.service';
import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { File } from 'babel-types';

@Component({
  selector: 'app-edit-solution',
  templateUrl: './edit-solution.component.html',
  styleUrls: ['./edit-solution.component.css'],
  providers: [ ApiserviceService]
})
export class EditSolutionComponent implements OnInit {
  @ViewChild('fileInput') inputEl: ElementRef;
  color: String;
  public userId: number;
  public solutionInput: any;
  public data: any;
  public name: string;
  public versionNumber: string;
  public systemType: string;
  public solutionTypeName: string;
  public vendor: string;
  public hostingType: string;
  public labVendor: string;
  public firstName: any;
  public lastName: any;
  public emailId: any;
  public phoneNumber: any;
  public editSolution: FormGroup;
  public solutionType: any;
  public systemTypeDTO: any;
  public vendorDTO: any;
  public hostingTypeDTO: any;
  public labVendorDTO: any;
  //static readonly files;
  //static file;
  
  
  public solutionData: solution;
  
  constructor(private activatedRoute: ActivatedRoute, private _apiservice: ApiserviceService, private fb: FormBuilder, private _location: Location) {  
    this.createForm();
  }
  
  editorGroup():void{
  console.log(this.editSolution.disabled);
  if(this.editSolution.disabled){
  this.editSolution.enable();
  }
  else{
  this.editSolution.disable();
  }
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
      this.editSolution.disable();

      /*this._apiservice.getSolutionExtra(this.userId)
      .subscribe((data:any) => {
        this.data = data;
       console.log(this.data);
      })*/

    });

    this.onDisplaySolution();
    this.getSolutionTypes();
    this.getSolutionsOnload();
    }
  
  /*updated($event) {
   const files = $event.target.files || $event.srcElement.files;
   const file = files[0];
    //const formData = new FormData();
    //formData.append('file', file);
  }*/
  
   createForm() {
    this.editSolution = this.fb.group({
      name: ['', Validators.required],
      file: ['', Validators.required],
      versionNumber: ['', Validators.required],
      solutionTypeName: ['', Validators.required],
      systemTypeDTO: this.fb.group({
        name: ''
      }),
      vendor: this.fb.group({
        name: ''
      }),
      hostingTypeDTO: this.fb.group({
        name: ''
      }),
      labVendorsDTO: this.fb.group({
        name: ''
      }),
    });
  }
  
  createSolution(value){
    value['solutionId']=this.userId;
    var formData = new FormData();
    //var files:File[]=[];
    //let inputEl = this.inputEl.nativeElement;
   // files.push(inputEl.files.item(0));
    console.log(JSON.stringify(value));
    formData.append('solution',JSON.stringify(value));
   // for(let i=0;i<files.length;i++){
     // formData.append('file[]',files[i]);
      
  //  }
//    formData.append('file',files);
    console.log(formData);
    
    this._apiservice.updateSolution(formData)
     
        .subscribe((data : any) => {
          console.log(data);
        }, error => console.log(error));
  }
  
  cancelButton(){
 this.editSolution.disable();

 }


  onDisplaySolution() {
    this._apiservice.getSolutionExtra(this.userId)
      .subscribe((data: any) => {
       //this.solutionData = data;
        //this.editSolution  = new FormGroup(data);
         (<FormGroup>this.editSolution)
            .patchValue(data, { onlySelf: true }); 
        //console.log(this.solutionData);
//        console.log(data);
    
          /*this.name = data.name;
          this.versionNumber=data.versionNumber;
          this.systemName=data.systemTypeDTO.name;
          this.equipmentType=data.solutionTypeName;
          this.vendorName=data.vendor.name;
          this.hostingType=data.hostingTypeDTO.name;
          this.labVendor=data.labVendorsDTO.name;
          this.firstName=data.labVendorsDTO.firstName;
          this.lastName=data.labVendorsDTO.lastName;
          this.emailId=data.labVendorsDTO.emailId;
          this.phoneNumber=data.labVendorsDTO.phoneNumber;*/
       //this.bindDetails(data);
        
       
      },error => {
      
        console.log(error);
        
      });
  }
  
  getSolutionTypes(){
     this._apiservice.getSolutionTypes()
    .subscribe((data:any) => {
     this.solutionType = data.solutionTypeDTOs;
      console.log(data);
      
    },error => console.log(error));
  }
  
  getSolutionsOnload(){
    this._apiservice.getSolutionsOnload()
    .subscribe((data:any) => {
     this.systemTypeDTO = data.systemTypeDTOs;
     this.vendorDTO = data.vendorsDTOs;
     this.hostingTypeDTO=data.hostingTypeDTOs;
     this.labVendorDTO=data.labVendorsDTOs;
      console.log(data);
      
    },error => console.log(error));
  }
  
  
  /*public bindDetails(data:any)
  {
    
    
    this.editSolution.controls['name'].setValue(data.name);
    this.editSolution.controls['versionNumber'].setValue(data.versionNumber);
  }*/
  
  @HostListener('window:scroll', [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.color = 'online';
      console.log('You are 100px from the top to bottom');
    } else {
        this.color = 'offline';
        console.log('You are 500px from the top to bottom');
    }

  }
  x
  getColor() {
    return this.color === 'online' ? '#ffffff' : 'white';
  }

  getOpacity() {
    return this.color === 'online' ? 0.8 : 1;
  }
  
  backClicked() {
        this._location.back();
    }
  
}
