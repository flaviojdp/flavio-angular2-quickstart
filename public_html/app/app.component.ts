import { Component, Input } from '@angular/core';
import { TaskEditComponent } from './task-edit.component';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <ul>
      <li *ngFor="let t of tasks" (click)="onClick( t )">{{t.id}} - {{t.name}}</li>
    </ul>
    <task-edit [task]="selectedTask"></task-edit>
  `
  ,
  directives: [TaskEditComponent],
  providers : [TaskService]
})
export class AppComponent {
  title = "Hello World!!!";
  tasks : Task[];
  selectedTask : Task;

  constructor(private taskService: TaskService){
    //var service = new TaskService();
    this.tasks = this.taskService.getTasks();
  }

  onClick( task ){
    this.selectedTask = task;
  }
}
