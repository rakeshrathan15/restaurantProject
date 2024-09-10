import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { AddRestaurantsComponent } from './add-restaurants/add-restaurants.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';


const routes: Routes = [{
  path: 'forgotPassword',
  component:ForgotpasswordComponent
},
{
  path: 'register',
  component:TemplateDrivenComponentComponent
},{
  path:'addRestuarant',
  component:AddRestaurantsComponent
},{
  path:'createAccount',
  component:CreateaccountComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }