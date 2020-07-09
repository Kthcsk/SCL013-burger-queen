import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {
  orders: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.orders = firestore.collection('orders').valueChanges();
  }

  ngOnInit(): void {
  }

}
