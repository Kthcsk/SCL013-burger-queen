import { Component, OnInit } from '@angular/core';
import { MenuDrinksService } from '../services/menu-drinks.service';

@Component({
  selector: 'app-menu-drinks',
  templateUrl: './menu-drinks.component.html',
  styleUrls: ['./menu-drinks.component.css']
})
export class MenuDrinksComponent implements OnInit {

  drinksDataCall:any[] = [];

  constructor(private menuDrinksService: MenuDrinksService) {
    this.menuDrinksService.drinksMenu().subscribe(answer=>{
      this.drinksDataCall = answer["drinks"]
      console.log(answer);
    })
   }

  ngOnInit(): void {
  }

}
