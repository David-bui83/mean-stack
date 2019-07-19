import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  burbankData:any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.burbankWeather();
  }
  burbankWeather(){
    this._httpService.getBurbank().subscribe(data=>{
      this.burbankData = data;
      console.log(this.burbankData);
    });
  }
}
