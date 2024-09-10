import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './model/Account';

@Injectable({
  providedIn: 'root'
})
export class AtmService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  createAtm(account: Account): Observable<Atm> {
    return this.http.post<Atm>(`${this.apiUrl}/createAtm`, account);
  }

  getCardNumber(accountNumber: string): Observable<Atm> {
    return this.http.get<Atm>(`${this.apiUrl}/getCardNumber/${accountNumber}`);
  }
}
