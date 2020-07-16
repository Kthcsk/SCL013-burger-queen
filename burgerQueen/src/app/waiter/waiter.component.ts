import { Component, OnInit } from '@angular/core';
import { ConectionService } from '../services/conection.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  order: any = { //hacemos una propiedad o característica o atributos, que sea any=cualquier tipo
    clientName:'',
    tableNumber:''
  }

  constructor(private conection: ConectionService){

  }

  ngOnInit(): void {
  }

  addOrder(){
   // this.conection.addService(this.order);
   this.conection.agregarOrden(this.order);
   console.log(this.order);

    //this.order.clientName = '';
    //this.order.tableNumber = '';
  }

}
