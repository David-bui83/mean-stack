import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private _http: HttpClient) { 
  this.getAll(); 
  this.getOne('5d2be5a11beb7c141e6d7d43');
  // this.createOne({
  //   "title":"Todos from angular",
  //   "desc":"This is a test todo",
  //   "completed":false
  // });
  // this.updateOne('5d2be5a11beb7c141e6d7d43',{
  //   "title":"Todos from angular",
  //   "desc":"This is a test todo",
  //   "completed":false
  // });
  // this.destroy('');
  }
  getAll = () => {
    let tempObservable = this._http.get('/todos');
    tempObservable.subscribe(data=>console.log('Got our todos!', data));
    return tempObservable;
  };
  getOne = (id: String) => {
    let tempObservable = this._http.get('/todos/'+ id);
    tempObservable.subscribe(data=>console.log('Got one todo!', data));
  };
  createOne = (data: any) => {
    let tempObservable = this._http.post('/todos',data);
    tempObservable.subscribe(data=>console.log('Created todo',data));
  };
  updateOne = (id: string, data: any) => {
    let tempObservable = this._http.put('todos/'+ id,data);
    tempObservable.subscribe(data=>{console.log(data)});
  }
  destroy = (id: string) => {
    let tempObservable = this._http.delete('todos/' + id );
    tempObservable.subscribe(data=>console.log(data));
  }
}
