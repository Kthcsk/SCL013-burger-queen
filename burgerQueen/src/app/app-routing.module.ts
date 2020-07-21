import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { WaiterComponent } from './waiter/waiter.component';
import { HomeComponent } from './home/home.component';
import { MenuDrinksComponent } from './menu-drinks/menu-drinks.component';
import { MenuAppetizersComponent } from './menu-appetizers/menu-appetizers.component';
import { MenuLunchComponent } from './menu-lunch/menu-lunch.component';
import { KitchenComponent } from './kitchen/kitchen.component';

const route:Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'}, // // ruta madre por defecto
  { path: 'home', component: HomeComponent},
  { path: 'waiter', component: WaiterComponent,
    children:[
      { path: '', pathMatch: 'prefix', redirectTo: 'drinks'}, // ruta hija por defecto
      { path: 'drinks', component: MenuDrinksComponent},
      { path: 'appetizers', component: MenuAppetizersComponent},
      { path: 'lunch', component: MenuLunchComponent}
    ]},
  { path: 'kitchen', component: KitchenComponent},
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route) // RouterModule clase importada de angular
  ],                            // .forRoot crea un modulo que contienen todas las directivas, las rutas que se le entregan y el servicio del router en si mismo
  exports: [                    // route: constante cerada en linea 10
    RouterModule
  ]
})
export class AppRoutingModule { }
