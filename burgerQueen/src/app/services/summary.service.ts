import { Injectable } from '@angular/core';

export class LineItem { // clase que va a contener una cantidad asociada a un producto

  quantity: number; // define propiedad "quantity" de tipo número


  constructor(public product: any){ // variable de tipo publica (de tipo "cualquiera")
    this.quantity = 1; // inicializa en valor igual a 1 (para poder multiplicar desde 1 y no de 0)
  }

  
  get price(): number{ // método get: (obtiene función "price()") le dice a la clase LineItem que obtenga un dato de tipo número con su precio                        estamos suplantando un producto con una línea de producto
    return this.product.price * this.quantity; // retorna el precio del producto x la cantidad

  }

  get name(): string{ // método get: (obtiene función "name()") obtiene en nombre del producto
    return this.product.name; // retorna el nombre del producto
  }

  increase(){ // método de incrementar (del contador)
    this.quantity++; // aumenta 1 a la propiedad quantity
  }

  decrease(){ // método de restar (del contador)
    if (this.quantity > 0) { // si la cantidad es mayor a 0 que ocurra línea 25 (evita que contador tenga números negativos)
      this.quantity--; // resta 1 a la propiedad quantity
    }
  }
}

@Injectable({
  providedIn: 'root'
})

export class SummaryService {


  summaryArray: Array<any>; // se refiere a un arreglo del resumen de productos de tipo "cualquiera" // Array es una interface propia de libreria de angular
  clientInfo: any; // propiedad de la clase, de tipo "cualquiera"


  constructor() {
    this.summaryArray = []; // sumaryArray es un array vacio
    this.clientInfo = { // clientInfo tiene dos propiedades, clientName, de tipo string y tableNumber de tipo número
      clientName: '',  // se inicia en "vacio"" para evitar error, al renderizar sitio, pide por defecto valores en los inputs
      tableNumber: null // se inicia en null para evitar error, al renderizar sitio, pide por defecto valores en los inputs
    }
   }

   saveClientInfo(info: any) { // método que guarada la información del cliente
    this.clientInfo = info; // estamos llamando a "clientInfo" para guardarle la info (que es de tipo "cualquiera")
   }


   pushToOrder(product: any){ // pushing productos (product definiendo como "cualquiera") al pedido
    const lineItem = this.summaryArray.find(lineItem => lineItem.product == product); // impide que se agregue el mismo producto | retorna un producto que no es el mismo


    if (lineItem) { // si en lineItem encuentra un producto igual al otro
      lineItem.increase(); // lo va a incrementar
    } else {

      this.summaryArray.push(new LineItem(product)); // si no crea un nuevo objeto de producto | instancia anónima o sea sin variable

    }

    this.showOrder(); // se ejecuta showOrder
  }


  showOrder(){ // retorna y muestra propiedad summaryArray (con todos los métodos anteriores)
    console.log(this.summaryArray) // en summaryArray: se guardan: los productos, en contador, el precio y la funcionalidad que al agregar un producto se sume a su propio valor

    return this.summaryArray;
  }

}
