import { ApiserviceService } from '../apiservice.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-vendors-view',
  templateUrl: './vendors-view.component.html',
  styleUrls: ['./vendors-view.component.css'],
  providers: [ ApiserviceService ]
})
export class VendorsViewComponent implements OnInit {

    public vendors:any;
  public vendorsContact:any;
  constructor(private _apiservice: ApiserviceService,private router: Router) { }

  ngOnInit() {
    this.getVendors()

  }
  
    getVendors()
  {
     this._apiservice.getVendors()
    .subscribe((data:any) => {
     this.vendors = data.vendorsDTOs;
      this.vendorsContact=data.vendorsDTOs.vendorContact;
      console.log(data);
      
    },error => console.log(error));
  }
  
  
  /*openVendorEdit(id)
  {
    this.router.navigate(['/editVendors/' + id]);
  }*/

}
