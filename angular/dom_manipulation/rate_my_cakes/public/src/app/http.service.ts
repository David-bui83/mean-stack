import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getcakes(){
    return this._http.get('/cakes');
  };

  getCake(id){
    return this._http.get(`/cakes/${id}`);
  }

  addCake(data){
    return this._http.post('/cakes',data);
  }

  addComment(id, data){
    return this._http.put(`/cakes/rating/${id}`,data);
  }
}
