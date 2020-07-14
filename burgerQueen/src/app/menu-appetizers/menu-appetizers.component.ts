import { Component, OnInit } from '@angular/core';
import { MenuAppetizersService } from '../services/menu-appetizers.service';


@Component({
  selector: 'app-menu-appetizers',
  templateUrl: './menu-appetizers.component.html',
  styleUrls: ['./menu-appetizers.component.css']
})
export class MenuAppetizersComponent implements OnInit {

  appetizersDataCall:any[] = [];

  constructor(private menuAppetizersService: MenuAppetizersService) {
    this.menuAppetizersService.appetizersMenu().subscribe(answer=>{
      this.appetizersDataCall = answer["appetizers"]
      console.log(answer);
    })
   }

  ngOnInit(): void {
  }

}
