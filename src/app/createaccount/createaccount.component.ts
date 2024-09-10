import { Component } from '@angular/core';
import { Account } from '../model/Account';
import { AccountService } from '../account.service';

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

  
  account= new Account('','','',0,'');

  createAccount(){
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
