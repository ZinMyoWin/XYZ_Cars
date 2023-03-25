import { Component } from '@angular/core';
import { car } from '../car';
import { CarsService } from '../cars.service';
@Component({
  selector: 'app-car-lists',
  templateUrl: './car-lists.component.html',
  styleUrls: ['./car-lists.component.css']
})
export class CarListsComponent {

  
  constructor(private carsevice:CarsService){

  }

  allcars:car[]=[];

  ngOnInit():void{
    this.fetchAllCar();
  }

  fetchAllCar():void{
    //calling service method
    this.allcars=this.carsevice.getAllCar();
  }

}
