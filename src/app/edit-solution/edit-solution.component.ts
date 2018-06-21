import { ApiserviceService } from '../apiservice.service';
import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-solution',
  templateUrl: './edit-solution.component.html',
  styleUrls: ['./edit-solution.component.css'],
  providers: [ ApiserviceService]
})
export class EditSolutionComponent implements OnInit {
  color: String;
  public userId: number;
  public solutionInput: any;
  public data: any;
  public name: any;
  public versionNumber: any;
  public systemName: any;
  public equipmentType: any;
  public vendorName: any;
  public hostingType: any;
  public labVendor: any;
  public firstName: any;
  public lastName: any;
  public emailId: any;
  public phoneNumber: any;
  
  
  public solutionData: solution;
  
  constructor(private activatedRoute: ActivatedRoute, private _apiservice: ApiserviceService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];

      /*this._apiservice.getSolutionExtra(this.userId)
      .subscribe((data:any) => {
        this.data = data;
       console.log(this.data);
      })*/

    });

    this.onDisplaySolution();
    }

  onDisplaySolution() {
    this._apiservice.getSolutionExtra(this.userId)
      .subscribe((data: any) => {
       this.solutionData = data;
        
        console.log(this.solutionData);
    
          this.name = data.name;
          this.versionNumber=data.versionNumber;
          this.systemName=data.systemTypeDTO.name;
          this.equipmentType=data.solutionTypeName;
          this.vendorName=data.vendor.name;
          this.hostingType=data.hostingTypeDTO.name;
          this.labVendor=data.labVendorsDTO.name;
          this.firstName=data.labVendorsDTO.firstName;
          this.lastName=data.labVendorsDTO.lastName;
          this.emailId=data.labVendorsDTO.emailId;
          this.phoneNumber=data.labVendorsDTO.phoneNumber;
       
        
       
      },error => {
      
        console.log(error);
        
      });
  }
  


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

}
