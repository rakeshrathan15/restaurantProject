import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

  constructor(private http:HttpClient) { }


  learnObservable(): Observable<string>{

    return new Observable<string>(observer =>{

       console.log('Observer entered');

       setTimeout(()=>observer.next('from customer Observable '),6000);


    });
  }

  registerUser(user:any):Observable<Object>{
    console.log('in service '+JSON.stringify(user));

    //method
    //path
    // protocal
    //Headers
    // Body
   const httpHeaders = {
    headers:new HttpHeaders({
      'companyname':'Neoteric',
      'Content-Type':'application/json',
      'Accept':'application/json'
    })
   }
   return this.http.post('http://localhost:8080/api/registerUser',user,httpHeaders);
 
  }
}
