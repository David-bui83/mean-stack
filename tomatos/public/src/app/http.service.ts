import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAll=()=>{
    return this._http.get('/api/films');
  };
  getOneFilm=(id:string)=>{
    return this._http.get(`/api/films/${id}`);
  };
  postFilm=(newFilm:any)=>{
    return this._http.post('api/films',newFilm);
  };
  addReview=(id:string,newReview:any)=>{
    return this._http.put(`/api/films/add/${id}`,newReview);
  };
  destroy=(id:string)=>{
    return this._http.delete(`/api/films/${id}`);
  };
}
