import { Component } from '@angular/core';
import { Account } from '../model/Account';
import { AccountService } from '../account.service';
import { AddRestaurantsComponent } from '../add-restaurants/add-restaurants.component';
import { Address } from '../model/Address';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateaccountComponent {
  accountNumber:string="Test";

  responseFlag:boolean=true;


  constructor(private accountService:AccountService){

  }

  
  account= new Account('','','',0,'',new Address('','','','',''));

  createAccount(custaddress:AddressComponent){

    console.log('custaddress'+JSON.stringify(custaddress));
    this.account.address=custaddress.address;
     console.log(JSON.stringify(this.account));
       this.accountService.createAccount(this.account).subscribe(
        data=>{
          this.responseFlag=true;
          this.accountNumber=data.accountNumber;
          console.log(JSON.stringify(data))
          console.log(this.responseFlag);
          this.account=data;
        }
       )
     }
  

}
