import { Component, EventEmitter } from '@angular/core';
import { UserregisterService } from '../userregister.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-template-driven-component',
  templateUrl: './template-driven-component.component.html',
  styleUrl: './template-driven-component.component.css'
})
export class TemplateDrivenComponentComponent {
        name:string = 'Angular Demo';

        @Output()
        userNameEmitter : EventEmitter<string>=new EventEmitter();

        
        constructor(private userRegisterService:UserregisterService){

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
