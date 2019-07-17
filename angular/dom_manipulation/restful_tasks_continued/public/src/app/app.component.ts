import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Tasks';
  newTask:any;
  editTask:any;
  constructor(private _httpService: HttpService){}
  tasks = [];
  task:any;

  ngOnInit() {
    this.newTask = {title:'',desc:''};
    this.editTask = {title:'',desc:''};
  };
  getTaskFromService(id){
    console.log(id);
    this._httpService.getTask(id).subscribe(data=>{this.task = data['data']});
  };
  buttonGetAllTasks(){
    this._httpService.getTasks().subscribe(data=>{
      this.tasks = data['data'];
    })
  };
  buttonEditTask(id){
    this._httpService.getTask(id).subscribe(data=>{
      this.editTask = data['data'];
    })
  };
  buttonUpdateTask(id){
    this._httpService.updateTask(id,this.editTask).subscribe(data=>{
      this.editTask = data['data'];
      this.ngOnInit();
      this.buttonGetAllTasks();
    })
  };
  onSubmit(){
    this._httpService.createTask(this.newTask).subscribe(data=>{});
    this.buttonGetAllTasks();
  }
  buttonDeleteTask(id){
    this._httpService.deleteTask(id).subscribe(data=>{this.tasks = data['data']});
    this.buttonGetAllTasks();
  }
}
