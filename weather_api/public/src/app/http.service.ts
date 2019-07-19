import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getSeattle(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=seattle,us&appid=ad9f6439dba4ed6b218098c7abd1b682');
  }
  getSanJose(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=san jose,us&appid=ad9f6439dba4ed6b218098c7abd1b682');
  }
  getBurbank(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=burbank,us&appid=ad9f6439dba4ed6b218098c7abd1b682');
  }
  getDallas(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=dallas,us&appid=ad9f6439dba4ed6b218098c7abd1b682');
  }
  getWashington(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=washington,us&appid=ad9f6439dba4ed6b218098c7abd1b682');
  }
  getChicago(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=chicago,us&appid=ad9f6439dba4ed6b218098c7abd1b682');
  }
}
