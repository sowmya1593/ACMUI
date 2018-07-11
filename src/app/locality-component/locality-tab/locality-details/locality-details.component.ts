
import {Solution, SystemType, HostingType, LabVendors, CertDocDTO, Vendor} from '../../../data_model';
import {APP_CONFIG} from '../../../app.config';
import {Location} from '@angular/common';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import {File} from 'babel-types';
import {Component, OnInit, HostListener, ViewChild, ElementRef, NgModule} from '@angular/core';
import { Locality } from '../../../data_model_locality';
import {ApiserviceService} from '../../../apiservice.service';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, NgForm} from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-locality-details',
  templateUrl: './locality-details.component.html',
  styleUrls: ['./locality-details.component.css'],
  providers: [ApiserviceService]
})
export class LocalityDetailsComponent implements OnInit {
@ViewChild('fileInput') inputEl: ElementRef;
  @ViewChild('editForm') solutionsForm: NgForm;
  color: String;
  solution: Solution;
   locality: Locality;
  editSolution: FormGroup;
  certDocDTO: CertDocDTO;
  files: File[] = [];
  public systemTypeDTO: any;
  public vendorDTO: any;
  public hostingTypeDTO: any;
  public labVendorsDTO: any;
  public solutionType: any;
//  public systemTyp:any
  
  constructor( private activatedRoute: ActivatedRoute,  private _apiservice: ApiserviceService,private   fb: FormBuilder
    , private  http: Http,  private _location: Location) {
    this.solution = new Solution();
    this.locality = new Locality();
    this.solution.systemTypeDTO = new SystemType();
    this.solution.hostingTypeDTO = new HostingType();
    this.solution.labVendorsDTO = new LabVendors();
    this.solution.vendor = new Vendor();
     this.solution.certDocDTOs = [] as CertDocDTO[];
    this.files = [] as File[];
    this.editSolution = this.fb.group({
      solutionId: 0,
      name: ['', Validators.required],
      versionNumber: ['', Validators.required],
      solutionTypeName: ['', Validators.required],
      labVendorId: [0, Validators.required],
      solutionType : 0,
      vendorId : 0,
      systemTypeTry: ['', Validators.required],
      systemTypeTry1: ['', Validators.required],
      systemType: this.fb.group({
        name: '',
        systemTypeId: 0
      }),
      hostingType : this.fb.group({
        name: '',
        hostingTypeId: '',
      }),
      labVendors: this.fb.group({
           name : '',
           firstName :  '',
           lastName :  '',
           middleName :  '',
           suffix :  '',
           emailId :  '',
           streetName :  '',
           city :  '',
           state :  '',
           zipcode :  '',
           phoneNumber :  '',
      }),
      vendor: this.fb.group({
        vendorId: 0 ,
        name: '' ,
        createdBy: '' ,
        vendorAddress:  this.fb.group({
        addressId: 0 ,
        streetName: '' ,
        city: '' ,
        state: '' ,
        zipcode: '' ,
       }) ,
        vendorContact:  this.fb.group({
         contactId: 0 ,
         firstName: '' ,
         lastName: '' ,
         middleName: '' ,
         suffix: '' ,
         emailId: '' ,
         phoneNumber: '' ,
        }) ,
      }),
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.solution.solutionId = params['id'];
      this.editSolution.disable();
      
      //if (params['id'] != null)
        //{
       this.onDisplaySolution();
      //}
      this.getSolutionsOnload();

    });
  }
  
  createCertDTO(fileInput: any, section: string)
  {
    this.certDocDTO = new CertDocDTO();
    this.certDocDTO.fileName = fileInput.target.files[0].name;
    this.certDocDTO.section = section;
    console.log(fileInput.target.files[0]);
    this.files.push(fileInput.target.files[0]);
    console.log(this.solution.certDocDTOs)
    this.solution.certDocDTOs.push(this.certDocDTO);
  }
  onDisplaySolution() {
    this._apiservice.getSolutionExtra(this.solution.solutionId)
      .subscribe((data: Solution) => {
        console.log('data' + JSON.stringify(data));
        // this.editSolution.patchValue(data, {onlySelf: true});
//        let systemType = JSON.stringify(data.systemTypeDTO.name);
//        console.log(JSON.stringify(data.systemTypeDTO.name));
//        console.log(systemType);
        this.solution = data;
        this.solution.systemTypeDTO = data.systemTypeDTO;
        this.solution.hostingTypeDTO = data.hostingTypeDTO;
        this.solution.labVendorsDTO = data.labVendorsDTO;
        this.solution.vendor = data.vendor;
        this.solution.certDocDTOs = data.certDocDTOs;
        if(this.solution.certDocDTOs == null)
          {
          this.solution.certDocDTOs = [] as CertDocDTO[];
        }
        
         console.log('data ' + data.systemTypeDTO.name);
        
        //this.editSolution.controls['name'].setValue(data.name);
        //this.editSolution.controls['versionNumber'].setValue(data.versionNumber);
       // this.editSolution.controls['systemType.systemTypeId'].setValue(data.systemType.systemTypeId);
        console.log(data.systemTypeDTO.systemTypeId);
//           this.editSolution.controls['systemTypeTry1'].setValue(data.systemTypeDTO.name);
        //this.systemTyp =data.systemTypeDTO.name;
        
  });
}
  
  getSolutionsOnload() {
    this._apiservice.getSolutionsOnload()
      .subscribe((data: any) => {
        //console.log(data);
        this.systemTypeDTO = data.systemTypeDTOs;
        //this.editSolution.controls['systemTypeTry1'].setValue(data.systemTypeDTO.name);
//        this.systemTyp = data.systemTypeDTO.name;
       // console.log(this.systemTypeDTO);
        this.solutionType = data.solutionTypeDTOs;
        this.vendorDTO = data.vendorsDTOs;
        this.hostingTypeDTO = data.hostingTypeDTOs;
        this.labVendorsDTO = data.labVendorsDTOs;

      }, error => console.log(error));
  }
  
    createSolution() {
    
  
    console.log(JSON.stringify(this.locality));
    
     
  }
  
  backClicked() {
    this._location.back();
  }
  
  editorGroup(): void {
    if (this.editSolution.disabled) {
      this.editSolution.enable();
    }
    else {
      this.editSolution.disable();
    }
  }
  
  /*findId(value){
    this.solution.systemTypeDTO.systemTypeId = value;
  }*/
  
  showFile(id){
    console.log(id);
//    this._apiservice.getSolutionFile(id);
    window.open(APP_CONFIG.getSolutionFile + '?' + 'fileID' + '=' + id)
    
  }

   @HostListener('window:scroll', [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.color = 'online';
      
    } else {
      this.color = 'offline';
      
    }

  }
  
   getColor() {
    return this.color === 'online' ? '#ffffff' : 'white';
  }

  getOpacity() {
    return this.color === 'online' ? 0.8 : 1;
  }

  
}
