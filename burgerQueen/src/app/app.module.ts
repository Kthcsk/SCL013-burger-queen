/*librerias externas de angular*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/*imports firebase*/
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
/*imports burgerQueen*/
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { WaiterComponent } from './waiter/waiter.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { MenuDrinksComponent } from './menu-drinks/menu-drinks.component';
import { MenuAppetizersComponent } from './menu-appetizers/menu-appetizers.component';
import { MenuLunchComponent } from './menu-lunch/menu-lunch.component';
/* Service */
import { ConectionService } from './services/conection.service';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { KitchenComponent } from './kitchen/kitchen.component';

// decorador que marca una clase como un ngModul, que identifica los componentes, las directivas, los pipes (los hace publicas para poder exportar)
// configura el inyector de dependencias y el compilador que ayuda a relacionar las cosas juntas
@NgModule({
  declarations: [ // componentes unicos de la app
    AppComponent,
    BannerComponent,
    WaiterComponent,
    OrderComponent,
    HomeComponent,
    MenuDrinksComponent,
    MenuAppetizersComponent,
    MenuLunchComponent,
    KitchenComponent
  ],
  imports: [ // le dice a angular acerca de los otros ngModul que necesita un modulo en particular para funcionar correctamente
    BrowserModule, // para tener servicios especificos de navegador (como el render en el DOM)
    AppRoutingModule, // enrutador
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule // (ocupa HttpClient) es el inyector de dependencias
  ],
  providers: [ // proveedores de servicios
    ConectionService],
  bootstrap: [AppComponent] // bootstrap: componente raiz que crea angular y lo inserta en html
})
export class AppModule { }
