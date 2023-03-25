import { Component } from '@angular/core';
import { CarsService } from '../cars.service';
import { ActivatedRoute } from '@angular/router';
import { car } from '../car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent {
  constructor(private carservice:CarsService, private route:ActivatedRoute){}

  car:car | undefined;

  ngOnInit():void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.car = this.carservice.getCarbyID(id);
  } 

}
