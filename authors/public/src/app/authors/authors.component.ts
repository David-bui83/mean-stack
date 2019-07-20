import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors = []
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllAuthors();
  }
  getAllAuthors(){
    this._httpService.getAll().subscribe(data=>{
      this.authors = data['data'];
    });
  };
  destroyOneAuthor(id){
    this._httpService.destroy(id).subscribe(data=>{});
    this.ngOnInit();
  };
}
