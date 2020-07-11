/*imports de angular*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { MenuDataService } from './services/menu-data.service';


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
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ConectionService,
    MenuDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
