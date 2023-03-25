import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarListsComponent} from './car-lists/car-lists.component';
import { CarDetailComponent} from './car-detail/car-detail.component';
const routes: Routes = [
  {path:'cars', component: CarListsComponent},
  {path:'carsDetail/:id', component: CarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
