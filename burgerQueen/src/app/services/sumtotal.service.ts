import { Injectable } from '@angular/core';
import { SummaryService } from '../services/summary.service';
import { OrderComponent } from '../order/order.component'

@Injectable({
  providedIn: 'root'
})
export class SumtotalService {



  constructor(public summaryConection: SummaryService, public selectedOrders: OrderComponent) {

   }
}
