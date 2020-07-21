import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

                               // interface: tipo de clase, que define el tipo de los objtos
export interface ClientOrder { // Aquí van los campos de la colección y su tipo de value

  clientName: string;
  tableNumber: number;
  selectedItem: Array<object>;
}

@Injectable({
  providedIn: 'root'
})
export class ConectionService {
// inicializa firebase
  private docClientOrder: AngularFirestoreDocument<ClientOrder>; // Aquí en la var privada va la colección que referencia a la interfase

  private ordersCollectionFirestore: AngularFirestoreCollection<ClientOrder>;

  ordersObserverData: Observable<ClientOrder[]>; // Aquí orders guarda el observable, la interface guardaría las propiedades de la interface
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

  waiterOrder(){ // método que retorna el observable (ordersObserverData) de la interface ClientOrder

    return this.ordersObserverData;
  }

  addService(item: ClientOrder) { // agrega item de la interface a la colección de firestore ("orders")
    this.ordersCollectionFirestore.add(item);
  }

}
