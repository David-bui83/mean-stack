import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  washingtonData:any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.washingtonWeather();
  }
  washingtonWeather(){
    this._httpService.getWashington().subscribe(data=>{
      this.washingtonData = data;
      console.log(this.washingtonData);
    });
  }
}
