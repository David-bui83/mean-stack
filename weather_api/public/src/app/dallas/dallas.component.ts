import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  dallasData:any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.dallasWeather();
  }
  dallasWeather(){
    this._httpService.getDallas().subscribe(data=>{
      this.dallasData = data;
      console.log(this.dallasData);
    });
  }
}
