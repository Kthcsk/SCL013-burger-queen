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

  selectedOrdersArray = [];
  observerDoc: Observable <any[]>;

  get clientName(): string {
    return this.summaryConection.clientInfo.clientName;
  }

  get tableNumber(): number {
    return this.summaryConection.clientInfo.tableNumber;
  }

  get total(): number {
    return this.selectedOrdersArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price
      , 0
    );
  }

  increase(product){
    product.increase();
  }

  decrease(product){
    product.decrease();

    if (product.quantity <= 0) {
      const index = this.selectedOrdersArray.indexOf(product, 0);
      if (index > -1) {
        this.selectedOrdersArray.splice(index, 1);
      }
    }
  }

  constructor(
    public summaryConection: SummaryService,
    public db: AngularFirestore,
    private conection: ConectionService){
    this.observerDoc = db.collection('orders').valueChanges();
   }

  ngOnInit(): void {
    this.listOrders();
  }

  listOrders(){
    this.selectedOrdersArray = this.summaryConection.showOrder();
  }

  sendToData(){
    const orders: any = {
      clientName: this.summaryConection.clientInfo.clientName,
      tableNumber: this.summaryConection.clientInfo.tableNumber,
      selectedItem: this.summaryConection.summaryArray.map(item => Object.assign({}, item))
    };

    this.conection.addService(orders);
    this.summaryConection.clientInfo.clientName = '';
    this.summaryConection.clientInfo.tableNumber = '';
    this.selectedOrdersArray.splice(0, this.selectedOrdersArray.length);

  }

}
