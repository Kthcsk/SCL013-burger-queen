import { Component, OnInit } from '@angular/core';
import { ConectionService } from '../services/conection.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: any;

  constructor(private conection: ConectionService) {
    this.conection.waiterOrder().subscribe(item => {
      this.orders = item;
      console.log(this.orders)
    })
   }

  ngOnInit(): void {
  }

}
