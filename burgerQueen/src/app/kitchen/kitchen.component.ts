import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../services/summary.service';
import { ConectionService, ClientOrder } from '../services/conection.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  clientInfo: any;
  ordersObserverData: ClientOrder[];
  selectedOrdersArray = [];

  constructor(private conectionService: ConectionService, public conectionSummary: SummaryService) {
    this.conectionService.waiterOrder().subscribe(orders => {
      this.ordersObserverData = orders;
      console.log(this.ordersObserverData);
    });
  }

  ngOnInit(): void {
  }

}
