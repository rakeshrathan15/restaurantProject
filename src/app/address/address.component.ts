import { Component, EventEmitter, Output } from '@angular/core';
import { Address } from '../model/Address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {

  // @Output()
  // addressEventEmitter : EventEmitter<Address>=new EventEmitter();

  
  address ={
      add1:'',
      add2:'',
      pincode:'',
      state:'',
      city:''
  }

  // saveAddress():void{

    
  // }
}
