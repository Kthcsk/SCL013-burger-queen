import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../services/summary.service';
import { ConectionService } from '../services/conection.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: any;

  selectedOrdersArray= [];

  constructor(
    public summaryConection: SummaryService,
    private conection: ConectionService )
   {
    this.conection.waiterOrder().subscribe(item => {
      this.orders = item;
      console.log(this.orders)
    })
   }

  ngOnInit(): void {
    this.listOrders();
  }

  listOrders(){
    this.selectedOrdersArray= this.summaryConection.showOrder();
  }


}
