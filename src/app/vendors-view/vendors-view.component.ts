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
    this.vendors = data.vendorsDTOs.sort(function(val1, val2){
    return val1.name > val2.name
});
      this.vendorsContact=data.vendorsDTOs.vendorContact;
      console.log("this.vendors",this.vendors);
    },error => console.log(error));
  }
  
  
  /*openVendorEdit(id)
  {
    this.router.navigate(['/editVendors/' + id]);
  }*/

}
