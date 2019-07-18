import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() ratingToShow: any;
  avg:any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.findAvg();
  }

  findAvg(){
    let sum = 0;
    if(this.ratingToShow.rating.length == 0){
      this.avg = 0
      return this.avg
    }else{
      for(let rate of this.ratingToShow.rating){
        sum += parseFloat(rate.rating)
      }
      this.avg = sum / this.ratingToShow.rating.length;
      this.avg = parseFloat(this.avg).toFixed(2)
      return this.avg
    }
  }
}
