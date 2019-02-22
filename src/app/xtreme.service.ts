import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class XtremeService {

  constructor(private http: HttpClient) { }
  get_about() {
    return this.http.get("http://yaken.cloudapp.net/ExtremeBlueWeb/api/About/About"); 
  }
  get_Industries(){
    return this.http.get("http://yaken.cloudapp.net/ExtremeBlueWeb/api/Industries/AllIndustries");
  }
  get_Contact(){
    return this.http.get("http://yaken.cloudapp.net/ExtremeBlueWeb/api/ContactInfo/ContactInfo");
  }
  get_IntroPage(){
    return this.http.get("http://yaken.cloudapp.net/ExtremeBlueWeb/api/IntroPage/IntroPage");
  }
  get_products(){
    return this.http.get("http://yaken.cloudapp.net/ExtremeBlueWeb/api/Products/AllProducts?IndustryID=0");
  }
  get_Suppliers(){
    return this.http.get("http://yaken.cloudapp.net/ExtremeBlueWeb/api/Suppliers/AllSuppliers");
  }
  get_Gallery(){
    return this.http.get("http://yaken.cloudapp.net/ExtremeBlueWeb/api/Gallery/Gallery");
  }
  insert_Contact(data){
    var information ={
      "Name": data.Name,
      "Email": data.Email,
      "Subject": data.Subject,
      "Message": data.Message
    }
    return this.http.post("http://yaken.cloudapp.net/ExtremeBlueWeb/api/ContactInfo/ContactUs",information);
  }
}
