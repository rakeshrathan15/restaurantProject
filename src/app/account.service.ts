import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient ) {
   }

   createAccount(account:any):Observable<any>{
    console.log('in service'+JSON.stringify(account));

    const httpHeaders={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
      'Accept':'application/json'

      })
    };

    return this.http.post("http://localhost:8080/api/createAccount",account,httpHeaders);
   }
}
