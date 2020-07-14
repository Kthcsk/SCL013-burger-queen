import { Component, OnInit } from '@angular/core';
import { MenuLunchService } from '../services/menu-lunch.service';

@Component({
  selector: 'app-menu-lunch',
  templateUrl: './menu-lunch.component.html',
  styleUrls: ['./menu-lunch.component.css']
})
export class MenuLunchComponent implements OnInit {

  lunchDataCall:any[] = [];

  constructor(private menuLunchService: MenuLunchService) {
    this.menuLunchService.lunchMenu().subscribe(answer=>{
      this.lunchDataCall = answer["menu"]
      console.log(answer);
    })
   }

  ngOnInit(): void {
  }

}
