import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Authors';
  // newAuthor:any;
  // authors = [];
  // author:any;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    // this.getAllAuthors();
    // this.newAuthor = {first_name:"",last_name:""};
  };

  // getAllAuthors(){
  //   this._httpService.getAll().subscribe(data=>{
  //     this.authors = data['data'];
  //     console.log(this.authors);
  //   });
//   };
//   postOneAuthor(){
//     this._httpService.postOne(this.newAuthor).subscribe(data=>{});
//   };
//   updateOneAuthor(id){
//     this._httpService.updateOne(id,this.author).subscribe(data=>{
//       this.ngOnInit();
//     })
//   };
//   destroyOneAuthor(id){
//     this._httpService.destroy(id).subscribe(data=>{});
//   }
}
