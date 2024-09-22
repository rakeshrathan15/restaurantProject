import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoansearchService {

  constructor(private httpClient:HttpClient ) {
  }

  searchAccount(accountnumber:any):Observable<any>{
    const httpHeaders = {

      headers:new HttpHeaders({
        'accountinput':accountnumber,
        'Content-Type':'application/json',
      'Accept':'application/json'
      })
    };
    return this.httpClient.get("http://localhost:8080/api/searchAccount/criteria",httpHeaders);
  }
}

