import { Component, OnInit } from '@angular/core';
import { MenuLunchService } from '../services/menu-lunch.service';
import { SummaryService } from '../services/summary.service';

@Component({
  selector: 'app-menu-lunch',
  templateUrl: './menu-lunch.component.html',
  styleUrls: ['./menu-lunch.component.css']
})
export class MenuLunchComponent implements OnInit {

  lunchDataCall:any[] = [];

  constructor(
    private menuLunchService: MenuLunchService,
    public summaryConection: SummaryService){
    this.menuLunchService.lunchMenu().subscribe(answer=>{
      this.lunchDataCall = answer["lunch"]
    })
   }

  ngOnInit(): void {
  }

  sendProduct(object){
    this.summaryConection.pushToOrder(object)
  }

}
