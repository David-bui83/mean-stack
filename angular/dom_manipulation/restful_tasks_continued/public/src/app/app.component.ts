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
    // this.getTasksFromService();
    // this.buttonGetAllTasks();
  };
  // getTasksFromService(){
  //   this._httpService.getTasks().subscribe(data=>{
  //     this.tasks = data['data'];
  //   })
  // };
  getTaskFromService(id){
    console.log(id);
    this._httpService.getTask(id).subscribe(data=>{this.task = data['data']});
  };
  buttonGetAllTasks(){
    this._httpService.getTasks().subscribe(data=>{
      this.tasks = data['data'];
    })
  };


}
