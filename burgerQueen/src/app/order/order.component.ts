import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../services/summary.service';
import { ConectionService } from '../services/conection.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: any = {
    clientName:'',
    tableNumber:'',
    selectedItem:[] = this.summaryConection.summaryArray
  }

  selectedOrdersArray = [];
  observerDoc: Observable <any[]>;

  constructor(
    public summaryConection: SummaryService,
    public db: AngularFirestore,
    private conection: ConectionService )
   {
    this.conection.waiterOrder().subscribe(item => {
      this.orders = item;
      console.log(this.orders)
    })
    this.observerDoc = db.collection('orders').valueChanges();
   }

  ngOnInit(): void {
    this.listOrders();
  }

  listOrders(){
    this.selectedOrdersArray = this.summaryConection.showOrder();
  }

  sendToData(){
    this.conection.addService(this.orders);
    console.log(this.orders)
  }

}
