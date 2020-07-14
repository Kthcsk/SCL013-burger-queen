import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuLunchService {

  constructor(private http: HttpClient) {
    console.log("service running");
  }

  lunchMenu(){
    return this.http.get('../../assets/Data/menu-data-lunch.json')
  }

}
