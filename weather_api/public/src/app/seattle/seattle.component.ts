import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  seattleData:any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.seattleWeather();
  }
  seattleWeather(){
    this._httpService.getSeattle().subscribe(data=>{
      this.seattleData = data;
      console.log(this.seattleData);
    });
  }
}
