import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Solution, SystemType, HostingType, LabVendors, CertDocDTO, Vendor} from '../data_model';
import { Http, HttpModule } from '@angular/http';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {ApiserviceService} from '../apiservice.service';
import { APP_CONFIG } from '../app.config';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
  providers: [ApiserviceService],
})
export class SolutionsComponent implements OnInit {
  @ViewChild('fileInput') inputEl: ElementRef;
  @ViewChild('form') solutionsForm: NgForm;
  solution: Solution;
  public systemTypeDTO: any;
  public vendorDTO: any;
  public hostingTypeDTO: any;
  public labVendorsDTO: any;
  public solutionType: any;
   certDocDTO: CertDocDTO;
  files: File[] = [];
      //public labForm: string;
  public labForm: string;
        date: Date = new Date();
        settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MM-yyyy',
        defaultOpen: true
    }
  constructor( private activatedRoute: ActivatedRoute, private _apiservice: ApiserviceService, private  http: Http) { 
    this.solution = new Solution();
    this.solution.systemTypeDTO = new SystemType();
    this.solution.hostingTypeDTO = new HostingType();
    this.solution.labVendorsDTO = new LabVendors();
    this.solution.vendor = new Vendor();
     this.solution.certDocDTOs = [] as CertDocDTO[];
    this.files = [] as File[];
  }

  ngOnInit() {
   this.getSolutionsOnload();
    
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
  
  labContact(lab) {
      this.labForm = lab;

}
  
  getSolutionsOnload() {
    this._apiservice.getSolutionsOnload()
      .subscribe((data: any) => {
        // console.log(data);
        this.systemTypeDTO = data.systemTypeDTOs;
        // this.editSolution.controls['systemTypeTry1'].setValue(data.systemTypeDTO.name);
//        this.systemTyp = data.systemTypeDTO.name;
       // console.log(this.systemTypeDTO);
        this.solutionType = data.solutionTypeDTOs;
        this.vendorDTO = data.vendorsDTOs;
        this.hostingTypeDTO = data.hostingTypeDTOs;
        this.labVendorsDTO = data.labVendorsDTOs;

      }, error => console.log(error));
  }
  
      createSolution() {
     let url = APP_CONFIG.addSolutions;
    //value['solutionId'] = this.solution.solutionId;
    //value['vendorId'] = this.vendorDTO.vendorId;
    //value['labVendorId'] = this.labVendorDTO.labVendorId;
    var formData = new FormData();
    console.log(JSON.stringify(this.solution));
    formData.append('solution', JSON.stringify(this.solution));
    //formData.append('certDocs', this.files);
    //formData.append('certDocs',files)
    for (let i = 0; i < this.files.length; i++) {
     formData.append('certDocs', this.files[i]);

    }
    //    formData.append('file',files);
    console.log(formData.get('certDocs'));
    console.log(formData.get('solution'));
    //this._apiservice.updateSolution(formData)

    this.http.post(url, formData).subscribe((data: any) => {
      console.log(data);
    }, error => console.log(error));
     console.log(this.solutionsForm);
  }
  
  onSubmit(){
    console.log(this.solutionsForm);
  }
}
