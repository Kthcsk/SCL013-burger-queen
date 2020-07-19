import { Component, OnInit } from '@angular/core';
import { MenuDrinksService } from '../services/menu-drinks.service';
import { SummaryService } from '../services/summary.service';

@Component({
  selector: 'app-menu-drinks',
  templateUrl: './menu-drinks.component.html',
  styleUrls: ['./menu-drinks.component.css']
})
export class MenuDrinksComponent implements OnInit {

  drinksDataCall:any[] = [];

  constructor(
    private menuDrinksService: MenuDrinksService,
    public summaryConection: SummaryService){
    this.menuDrinksService.drinksMenu().subscribe(answer=>{
      this.drinksDataCall = answer["drinks"]
    })
   }

  ngOnInit(): void {
  }

  sendProduct(object){
    this.summaryConection.pushToOrder(object)
  }

}
