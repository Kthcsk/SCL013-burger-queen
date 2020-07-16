import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface ClientOrder { //Aquí van los campos de la colección y su tipo de value
  clientName: string;
  //tableNumber: number;
}

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  ordenArray:any = [];

  private ordersCollectionFirestore: AngularFirestoreCollection<ClientOrder>; //Aquí en la var privada va la colección que referencia a la interfase
  ordersObserverData: Observable<ClientOrder[]>; //Aquí orders guarda el observable, la interfase guardaría las propiedades de la interfase
                               //en un array
  constructor(private afs: AngularFirestore) { // afs angular-firestore
    this.ordersCollectionFirestore = afs.collection<ClientOrder>('orders');
    this.ordersObserverData = this.ordersCollectionFirestore.valueChanges();

  }

  waiterOrder(){
    return this.ordersObserverData;
  }

  addService(item: ClientOrder) {
    this.ordersCollectionFirestore.add(item);
  }

  agregarOrden(object : any){
    console.log(object);
    this.ordenArray.push(object);
    this.mostrarOrden();
  }

  mostrarOrden(){
    console.log(this.ordenArray)
    return this.ordenArray;
  }

}
