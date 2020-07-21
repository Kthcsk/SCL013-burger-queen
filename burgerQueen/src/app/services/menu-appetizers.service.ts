import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuAppetizersService {

  constructor(private http: HttpClient) { // hace consultas http
    console.log("service running");

  }

  appetizersMenu(){
    return this.http.get('../../assets/Data/menu-data-appetizers.json') // retorna el json
  }

}
