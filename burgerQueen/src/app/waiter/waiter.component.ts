import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../services/summary.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  clientInfo: any = {
    clientName:'',
    tableNumber:''
  }

  constructor(public summaryConection: SummaryService){
  }

  ngOnInit(): void {
  }

  addClientInfo(){ // agrega los datos de los inputs (de clientInfo), por medio del servicio, toma como parametro clientInfo (linea 12)
   this.summaryConection.saveClientInfo(this.clientInfo);
   console.log(this.clientInfo);
  }

}
