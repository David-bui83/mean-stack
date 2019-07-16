import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit{

  constructor(private _http: HttpClient) { 
    // this.getTasks();
  }
  getTasks(){
    // let tempobservable = this._http.get('/tasks');
    // tempobservable.subscribe(data=>console.log('Got your tasks!',data));
    return this._http.get('/tasks');
  }
}
