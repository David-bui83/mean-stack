import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getAll = () =>{
    return this._http.get('/authors');
  };
  getOne = (id:string) => {
    return this._http.get(`authors/${id}`);
  }
  postOne = (newAuthor:any) =>{
    return this._http.post('/authors',newAuthor);
  };
  updateOne = (id:any,author:any) => {
    return this._http.put(`authors/edit/${id}`,author);
  };
  destroy = (id:string) => {
    return this._http.delete(`authors/${id}`);
  };
}
