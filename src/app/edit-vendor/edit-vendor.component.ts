import { ApiserviceService } from '../apiservice.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.css'],
  providers: [ApiserviceService]
})
  
  

export class EditVendorComponent implements OnInit {
  activatedRoute: any;
  color: String;
  public userId: number;
  public name: string;
  public firstName: string;
  public lastName: string;
  public emailId: string;
  public phoneNumber: string;
  public address: string;
  public city: string;
  public state: string;
  public zipCode: string;
  //public vendorDetails: VendorDetails;
  
  
  
  
  constructor(private route: ActivatedRoute, private _apiservice: ApiserviceService) {}

  ngOnInit() {
    /*let  vendorDetails: VendorDetails;
      this.getEditVendors(this.userId);
    console.log(this.vendorDetails);*/
     this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    this.onDisplayVendors();
   
  }
      
      
      onDisplayVendors()
      {
           this._apiservice.getVendorExtra(this.userId)
      .subscribe((data: any) => {
        console.log(data);
        this.name = data.name;
        console.log(this.name);
        this.firstName = data.vendorContact.firstName;
        this.lastName = data.vendorContact.lastName;
        this.emailId = data.vendorContact.emailId;
        this.phoneNumber = data.vendorContact.phoneNumber;
        this.address = data.vendorAddress.streetName;
        this.city = data.vendorAddress.city;
        this.state = data.vendorAddress.state;
        this.zipCode = data.vendorAddress.zipcode;
      }, error => console.log(error));
     
    
      }
  
  @HostListener("window:scroll", [])
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

/*export interface VendorDetails {
    name: string;
    vendorAddress: VendorAddress;
    vendorContact : VendorContact;
}

  export interface VendorAddress {
      addressId : number;
 streetName : string;
  city : string;
  state : string;
  zipcode : string;
  }

   export interface VendorContact {
       contactId : number;
  firstName : string;
  lastName : string;
   middleName :string ;
  suffix :string;
  emailId :string;
  phoneNumber :string;
  }*/