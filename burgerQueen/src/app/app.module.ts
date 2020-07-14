/*imports de angular*/
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


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    WaiterComponent,
    OrderComponent,
    HomeComponent,
    MenuDrinksComponent,
    MenuAppetizersComponent,
    MenuLunchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ConectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
