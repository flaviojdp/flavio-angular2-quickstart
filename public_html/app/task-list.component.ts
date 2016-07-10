import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { TaskEditComponent } from './task-edit.component';
import { Task } from './task';
import { TaskService } from './task.service';


@Component({
  selector: 'task-list',
  template: `
    <ul>
      <li *ngFor="let t of tasks" (click)="onClick( t )">{{t.id}} - {{t.name}}</li>
    </ul>
  `
})

export class TaskListComponent implements OnInit{
  tasks : Task[];
  selectedTask : Task;

  constructor(private taskService: TaskService, private router: Router){}
  
  ngOnInit():any{
    this.getTasks();
  }
  
  getTasks(){
    var promise = this.taskService.getTasks();
    promise.then(result => this.tasks = result);
    //return this.tasks = 
  }

  onClick( task ){
    this.router.navigate(['Task.edit', { id: task.id }]);
  }
}
