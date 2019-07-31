import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errors:any;
  movies = [];
  newMovie = {
    title:'',
    name:'',
    rating:'',
    review:''
  }
  isDisabled:boolean = false;
  @Output() myEvent = new EventEmitter();
  @Output() hide = new EventEmitter();
  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }
    
  ngOnInit() {
    this.newMovie = {
      title:'',
      name:'',
      rating:'',
      review:''
    }
  }

  postOneMovie(){
    console.log(this.newMovie);
    this._httpService.postFilm(this.newMovie).subscribe(data=>{
      console.log(data)
      if(data['message']=='error'){
        console.log(data['data'])
        this.errors = data['data']['errors'];
      }else{
        console.log(data['message'])
        this.hideNew();
        this.callParent();
        this._router.navigate(['']);
      }
    });
  }
  callParent(){
    this.myEvent.emit('1');
    
  }
  hideNew(){
    this.hide.emit('1');
  }
  showNew(){
    if(this.isDisabled == false){
      this.isDisabled = true;
    }else{
      this.isDisabled = false;
    }
  }
}
