import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {

  constructor(private http: HttpClient) {
    console.log("service running");
  }

  itadakimasuMenu(){
    return this.http.get('../../assets/Data/menu-data.json')
  }

}
