import { Address } from "./Address";

export class Account{

    name:string;
    mobileNumber:string;
    pan:string;
    balance:number;
    acoountNumber:string;
  address:Address;


    constructor(name:string, mobileNumber:string,pan:string,balance:number,accountNumber:string,
        address:Address
    ){
   this.name=name;
   this.mobileNumber=mobileNumber;
   this.pan=pan;
   this.balance=balance;
   this.acoountNumber=accountNumber;
   this.address=address;
   
    }
}