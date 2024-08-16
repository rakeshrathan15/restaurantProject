
import { Component, EventEmitter, Output } from '@angular/core';
import { UserregisterService } from '../userregister.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name:string = 'Angular Demo';

  subject = new Subject<string>();

  @Output()
  userNameEmitter : EventEmitter<string>=new EventEmitter();

  
  constructor(private userRegisterService:UserregisterService){

    this.subject.subscribe(data => {
      console.log(" from subscribe data value"+data);
    })

  }
  password:string='';
  userDetails={
    name:'',
    email:'',
    address:'',
    mobile:'',
    age:null,
    gender:'',
  };


  register(form:any): void{

    this.subject.next("testing subject in angular"+this.userDetails.name);

    this.subject.next("22222222222222");

    this.userNameEmitter.emit(this.userDetails.name);

  this.userRegisterService.learnObservable().subscribe(
    data=>{
      console.log("from learn observable subscribe");
    }
  );
 

var response=this.userRegisterService.registerUser(this.userDetails);

response.subscribe(response=>{
console.log("....from subscribe of observable" +JSON.stringify(response));

}, error=>{
 console.log("registration is inprogress")
}

);
    console.log("succesfull register"+JSON.stringify(this.userDetails)+"response"+response);
  }


}
