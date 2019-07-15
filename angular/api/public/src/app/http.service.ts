import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  newData: any;
  constructor(private _http: HttpClient) { 
    this.getPokemon();
  
  }
  getPokemon(){
    let bulbasuar = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');

    bulbasuar.subscribe(data=>console.log('Data from pokimon API: ',data));
    bulbasuar.subscribe(data=>console.log('Data from pokimon API: ',data['species'].name));
    bulbasuar.subscribe(data=>{
      console.log('Data from pokimon API: ',data['moves'][0].move['name'])
      this.newData = data['moves'][0].move['url'];
      const newPokimon = this._http.get(this.newData);
    
      newPokimon.subscribe(data=>console.log('New Data: ', data))

    });
  }

}
