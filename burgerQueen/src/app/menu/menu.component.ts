import { Component, OnInit } from '@angular/core';
import { MenuDataService } from '../services/menu-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dataCall:any[] = [];

  active:any;
  show: boolean = true;

  constructor(private menuService:MenuDataService) {
    this.menuService.itadakimasuMenu().subscribe(answer=>{
      this.dataCall = answer['menu']
      console.log(answer);
    })
   }

  ngOnInit(): void {
  }

}
