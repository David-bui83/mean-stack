import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies = [];
  isDisabled:boolean = false;

  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies(){

    this._httpService.getAll().subscribe(data=>{
      this.movies = data['data'];
    })

  }
  triggerEvent(){
    console.log('from trigger');
    this.ngOnInit();
  }

  findAvg(reviews){
    // console.log('from find avg: ',reviews);
    let sum = 0;
    let avg = 0;
    for(let i = 0; i < reviews.length;i++){
      sum += reviews[i].rating;
      console.log(reviews[i].rating)
    }
    avg = sum / reviews.length
    return avg;
  }

  showNew(){
    if(this.isDisabled == false){
      this.isDisabled = true;
    }else{
      this.isDisabled = false;
    }
  }
}
