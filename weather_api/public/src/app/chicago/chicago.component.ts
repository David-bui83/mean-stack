import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  chicagoData:any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.chicagoWeather();
  }
  chicagoWeather(){
    this._httpService.getChicago().subscribe(data=>{
      this.chicagoData = data;
      console.log(this.chicagoData);
    });
  }

}
