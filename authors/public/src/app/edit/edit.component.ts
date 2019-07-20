import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author_id:any;
  author:any;
  errors:any;
  constructor(private _route: ActivatedRoute,
    private _router: Router, private _httpService: HttpService) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.author_id = params['id'];
      // console.log(this.author_id);
    });
    this.getOneAuthor();
  }
  getOneAuthor(){
    this._httpService.getOne(this.author_id).subscribe(data=>{this.author=data['data'];
      console.log(this.author);
    })
  }
  updateOneAuthor(id){
    // console.log("id from udpate: ",id)
    // console.log('this.author form udpate: ',this.author);
    this._httpService.updateOne(id,this.author).subscribe(data=>{
      console.log('from update error: ',data);
      if(data['message']=='Error'){
        this.errors = data["data"]["errors"]
      }else{
        // console.log("data from update: ",data);
        this._router.navigate(['']);
      }
    })
  };
}
