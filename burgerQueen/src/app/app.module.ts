/*imports de angular*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*imports firebase*/
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
/*imports burgerQueen*/
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { WaiterComponent } from './waiter/waiter.component';
import { OrderComponent } from './order/order.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ConectionService } from './services/conection.service';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    WaiterComponent,
    OrderComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
