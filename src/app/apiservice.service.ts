import { APP_CONFIG } from './app.config';
import { HttpService } from './core/http.service';
import { Injectable } from '@angular/core';
import { Http,HttpModule, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiserviceService {

  constructor(private _httpService : HttpService) { }
  
  
  getVendors()
  {
    let url = APP_CONFIG.getVendors;
    return this._httpService.get(url)
    .map(res =><Response>res.json());
  }
  
  getSolutions()
  {
    let url = APP_CONFIG.getSolutions;
    return this._httpService.get(url)
    .map(res =><Response>res.json());
  }
  
  
   getSolutionExtra(id)
  {
    let url = APP_CONFIG.getSolution;
    return this._httpService.get(url + '?' + 'solutionID' + '=' + id)
    .map(res =><Response>res.json());
  }
  
   /*getSolution()
  {
    let url = APP_CONFIG.getSolution;
    return this._httpService.get(url)
    .map(res =><Response>res.json());
  }*/
  
  getVendorExtra(id){
    let url = APP_CONFIG.getVendor;
    return this._httpService.get(url + '?' + 'vendorId' + '=' + id)
    .map(res =><Response>res.json());
  }

}
