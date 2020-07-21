import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../services/summary.service';
import { ConectionService, ClientOrder } from '../services/conection.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {  // OnInit: es un enlace de ciclo de vida que es llamado despues de que angular ha iniciado las propiedades de la data

  clientInfo: any;
  ordersObserverData: ClientOrder[]; // observador de la Interface
  selectedOrdersArray = [];

  constructor(
    private conectionService: ConectionService,
    public conectionSummary: SummaryService){

    this.conectionService.waiterOrder().subscribe(orders => { // del servicio conectionService ejecutamos waiterOrder

      this.ordersObserverData = orders;
    });
  }

  ngOnInit(): void { // definir su propio método de inicialización
  }

}
