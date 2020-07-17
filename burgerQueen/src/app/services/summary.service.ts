import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  summaryArray: Array<any>

  constructor() {
    this.summaryArray = [];
   }

   pushToOrder(object : any){
    console.log(object);
    this.summaryArray.push(object);
    this.showOrder();
  }

  showOrder(){
    console.log(this.summaryArray)
    return this.summaryArray;
  }

}
