import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Rate My Cakes';
  avg:any;
  constructor(private _httpService: HttpService){}
  cakes = [];
  newCake:any;
  newComment:any;
  cake:any;
  ngOnInit(){
    this.newCake = { baker:"",cake:"" };
    this.newComment = { rating:"",comment:""};
    this.getAllCakes();
  }

  getAllCakes(){
    this._httpService.getcakes().subscribe(data=>{
      this.cakes = data['data']
      console.log(this.cakes);
    });
  };

  getOneCake(id){
    this._httpService.getCake(id).subscribe(data=>{
      this.cake = data['data'];
    });
  };

  buttonAddCake(){
    console.log(this.newCake);
    this._httpService.addCake(this.newCake).subscribe(data=>{
    })
    this.newCake = { baker:"",cake:"" };
    this.getAllCakes();
  };
  
  buttonAddComment(id){
    this._httpService.addComment(id,this.newComment).subscribe(data=>{
      console.log(data);
      // this.ngOnInit();
    })
  }
}
