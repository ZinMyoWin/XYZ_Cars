import { Injectable } from '@angular/core';
import {car} from './car';
import {carList} from './mock-cars';
@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  //Get all the car
  getAllCar():car[]{
    return carList;
  }

  getCarbyID(car_id: number): car {
    const car = carList.find(c => c.carid === car_id)!;
    return car;
  }
}

