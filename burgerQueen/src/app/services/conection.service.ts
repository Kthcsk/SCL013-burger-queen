import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ClientOrder { // Aquí van los campos de la colección y su tipo de value
  clientName: string;
  tableNumber: number;
  selectedItem: Array<object>;
}

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  private docClientOrder: AngularFirestoreDocument<ClientOrder>;
  // Aquí en la var privada va la colección que referencia a la interfase
  private ordersCollectionFirestore: AngularFirestoreCollection<ClientOrder>;
  ordersObserverData: Observable<ClientOrder[]>; // Aquí orders guarda el observable, la interfase guardaría las propiedades de la interfase
                               // en un array
  constructor(private afs: AngularFirestore) { // afs angular-firestore
    this.ordersCollectionFirestore = afs.collection<ClientOrder>('orders');
    this.ordersObserverData = this.ordersCollectionFirestore.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ClientOrder;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

  waiterOrder(){ // Ocupar esta función para cuando retomemos firebase
    return this.ordersObserverData;
  }

  addService(item: ClientOrder) {
    this.ordersCollectionFirestore.add(item);
  }

}
