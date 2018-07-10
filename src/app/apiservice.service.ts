import { APP_CONFIG } from './app.config';
import { HttpService } from './core/http.service';
import { Solution } from './data_model';
import { Injectable } from '@angular/core';
import { Http,HttpModule, Headers,RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiserviceService {

  constructor(private _httpService : HttpService, private http : Http) { }
  
  
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
    const url = APP_CONFIG.getSolution;
    return this._httpService.get(url + '?' + 'solutionID' + '=' + id)
    .map(res => res.json() as Solution) ;
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
  postVendorData(body) {
  console.log("body",body);
  let url =APP_CONFIG.postVendor;
return this._httpService.post(url,body).map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                         }
  
  updateSolution(body){
    console.log(body);
    let url = APP_CONFIG.postSolution;
    let headers = new Headers({ 'Content-Type': 'multipart/form-data' });
    const options = new RequestOptions({ headers: headers });
    
    
    this.http.post(url, body);    
    //return this.http.post(url, body).map((res: Response) => res.json())
                            //.catch((error : any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  getSolutionTypes(id){
    let url = APP_CONFIG.getSolutionTypes;
    return this._httpService.get(url + '?' + 'solutionID' + '=' + id)
    .map(res =><Response>res.json());
  }
  
  getSolutionsOnload(){
    let url = APP_CONFIG.getSolutionsOnload;
    return this._httpService.get(url)
    .map(res =><Response>res.json());
  }
  
  addSolutions(body){
    console.log(body);
    let url = APP_CONFIG.addSolutions;
    return this._httpService.post(url, body).map((res: Response) => res.json())
                            .catch((error : any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  getSolutionFile(id){
    let url = APP_CONFIG.getSolutionFile;
    return this._httpService.get(url + '?' + 'fileId' + '=' + id)
    .map(res =><Response>res.json());
  }
}
