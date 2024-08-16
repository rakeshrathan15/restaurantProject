import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {

  subject = new Subject<string>();

        @Output()
        userNameEmitter : EventEmitter<string>=new EventEmitter();

        
        constructor(private userRegisterService:UserregisterService){

          this.subject.subscribe(data => {
            console.log(" from subscribe data value"+data);
          })

        }
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
}
}