import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  errors: any;
  newAuthor = {first_name:'',last_name:''}
  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newAuthor = {first_name:'',last_name:''};
  }
  postOneAuthor(){
    console.log(this.newAuthor);
    this._httpService.postOne(this.newAuthor).subscribe(data=>{
      console.log(data)
      if(data["message"] == "Error"){
        console.log("ERR")
        this.errors = data["data"]["errors"]
        console.log(this.errors)
      }else{
        this.newAuthor = {first_name:'',last_name:''};
        this._router.navigate(['']);
      }
    });
  };
}
