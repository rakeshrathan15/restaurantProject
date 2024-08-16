import { Component } from '@angular/core';
import { Restaurant } from '../model/Restaurant';
import { Address } from '../model/Address';
import { Rating } from '../model/Rating';

@Component({
  selector: 'app-add-restaurants',
  templateUrl: './add-restaurants.component.html',
  styleUrl: './add-restaurants.component.css'
})
export class AddRestaurantsComponent {


  restaurant = new Restaurant('',new Address('','','','',''),
  new Rating(0,''));
  


  
  
  addRestaurant():void{
    console.log("from Add Restaurant");
}
}
