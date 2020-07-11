import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MenuDataService } from '../app/services/menu-data.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('orders').valueChanges();
  }
}

export class LocalMenu {

  constructor(public menuService:MenuDataService) {

  }
}

