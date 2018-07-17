

import {APP_CONFIG} from '../../../app.config';
import {Location} from '@angular/common';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import {File} from 'babel-types';
import {Locality, applicationView} from '../../../data_model_locality';
import {Component, OnInit, HostListener, ViewChild, ElementRef, NgModule} from '@angular/core';

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
   public applicationViewDTO: any;
   locality: Locality;
   loc:any;
   appId:number;
 updatedTime:any;
  
  constructor( private route: ActivatedRoute,  private _apiservice: ApiserviceService,private   fb: FormBuilder
    , private  http: Http,  private _location: Location) {
    this.route.params.subscribe(params => {
    this.loc = params['Locality'];
   
        
   });
   this.locality = new Locality();
      }

  ngOnInit() {
  this.viewApplication(this.loc);
    
  }
 
  
  
  

  
  
  
 createLocality() {
     let url_update = APP_CONFIG.addLocality;
     var formData = new FormData();
     
      console.log(JSON.stringify(this.locality));
   
      formData.append('createApp',JSON.stringify(this.locality));
    console.log(formData.get("createApp"));
    console.log(this.appId);
    if(this.appId === undefined){
   console.log('saving');
    this.http.post(url_update, formData).subscribe((data: any) => {
              console.log(data);
            }, error => console.log(error));
    
     }
     else{
     console.log('update');
     console.log(this.appId);
     this.locality.applicationId = this.appId;
     console.log(JSON.stringify(this.locality));
      formData.append('application',JSON.stringify(this.locality));
     this.http.post(APP_CONFIG.updateLocality , formData).subscribe((data: any) => {
              console.log(data);
            }, error => console.log(error));
     }
     
  }
  
    viewApplication(local) {
    this._apiservice.viewApplication(local)
      .subscribe((data: any) => {
      console.log(data);
      if(data.applicationViewDTO === null){
       console.log('there is no local data');
      }
      else {
      this.appId=data.applicationViewDTO.applicationId;
      this.locality = data.applicationViewDTO;
      let d = new Date(this.locality.updatedTime);
      this.updatedTime = d.getMonth() + '/' +  d.getDay() + '/' + d.getFullYear();
      console.log(this.locality);
      }
        

      }, error => console.log(error));
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
