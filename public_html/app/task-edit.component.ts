import { Component, OnInit } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';
import {Task} from './task';
import {TaskService} from './task.service';

@Component({
  selector: 'task-edit',
  template: `
  <h3>Edição de tarefa</h3>
  <div *ngIf="task">
    <input type="text" [(ngModel)]="task.name" />
    <button type="button" (click)="goToTask()">Salvar</button>
  </div>
  `
})

export class TaskEditComponent implements OnInit{
  task : Task
  
  constructor( private route:Router, private routeParams: RouteParams, private taskService: TaskService){}
  
  ngOnInit():any{
    this.getTask();
  }
  
  getTask(){
    let id = this.routeParams.get('id');
    this.task = this.taskService.getTask( id );
  }
  
  goToTask(){
    this.route.navigate(['Task.list']);
  }
}