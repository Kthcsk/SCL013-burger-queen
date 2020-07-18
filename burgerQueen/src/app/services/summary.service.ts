import { Injectable } from '@angular/core';

export class LineItem { //que va a contener una cantidad asociada a un producto

  quantity: number;

  constructor(public product: any){
    this.quantity = 1;
  }

  get price(): number{ //estamos suplantando un producto con una línea de producto
    return this.product.price * this.quantity;
  }

  get name(): string{
    return this.product.name;
  }

  increase(){
    this.quantity++;
  }

  decrease(){
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
}

@Injectable({
  providedIn: 'root'
})

export class SummaryService {

  summaryArray: Array<any> //cambiar nombre a summaryProductArray
  clientInfo: any

  constructor() {
    this.summaryArray = [];
   }

   saveClientInfo(info: any) {
    this.clientInfo = info;
   }

   pushToOrder(product: any){ //cambiar object por product que es más descriptivo
    const lineItem = this.summaryArray.find(lineItem => lineItem.product == product); //impide que se agregue el mismo producto

    if (lineItem) {
      lineItem.increase();
    } else {
      this.summaryArray.push(new LineItem(product));//instancia anónima o sea sin variable
    }

    this.showOrder();
  }

  showOrder(){
    console.log(this.summaryArray)
    return this.summaryArray;
  }

}
