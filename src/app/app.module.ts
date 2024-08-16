import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient,withInterceptorsFromDi } from '@angular/common/http';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { MaskDirective } from './mask.directive';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AddressComponent } from './address/address.component';
import { UserComponent } from './user/user.component';
import { AddRestaurantsComponent } from './add-restaurants/add-restaurants.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponentComponent,
    ForgotpasswordComponent,
    MaskDirective,
    AddressComponent,
    UserComponent,
    AddRestaurantsComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
