import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { WaiterComponent } from './waiter/waiter.component';
import { HomeComponent } from './home/home.component';
import { MenuDrinksComponent } from './menu-drinks/menu-drinks.component';
import { MenuAppetizersComponent } from './menu-appetizers/menu-appetizers.component';
import { MenuLunchComponent } from './menu-lunch/menu-lunch.component';

const route:Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'waiter', component: WaiterComponent,
    children:[
      { path: '', pathMatch: 'prefix', redirectTo: 'drinks'},
      { path: 'drinks', component: MenuDrinksComponent},
      { path: 'appetizers', component: MenuAppetizersComponent},
      { path: 'lunch', component: MenuLunchComponent}
    ]}
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
