import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Tasks';
  constructor(private _httpService: HttpService){}
  tasks = [];
  task:any;

  ngOnInit() {
    this.getTasksFromService();
  }
  getTasksFromService(){
    this._httpService.getTasks().subscribe(data=>{
      this.tasks = data['data'];
    })}
}
