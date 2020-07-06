import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { WaiterComponent } from './waiter/waiter.component';
import { HomeComponent } from './home/home.component';

const route:Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'waiter', component: WaiterComponent},
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
