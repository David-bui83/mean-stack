import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  sanjoseData:any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.sanjoseWeather();
  }
  sanjoseWeather(){
    this._httpService.getSanJose().subscribe(data=>{
      this.sanjoseData = data;
      console.log(this.sanjoseData);
    });
  }
}
