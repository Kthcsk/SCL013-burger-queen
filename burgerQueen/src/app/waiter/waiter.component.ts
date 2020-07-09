import { Component, OnInit } from '@angular/core';
import { ConectionService } from '../services/conection.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  ordersFields: any;  //hacemos una propiedad o característica o atributos, que sea any=cualquier tipo

  constructor(private conection: ConectionService){
    this.conection.waiterOrder().subscribe(o => {
      this.ordersFields = o;
      console.log(this.ordersFields);
    })
  }

  ngOnInit(): void {
  }

}
