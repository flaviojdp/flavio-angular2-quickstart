import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {TaskListComponent} from './task-list.component'
import {TaskEditComponent} from './task-edit.component'
import {TaskService} from './task.service'

@RouteConfig([
  { 
    path: '/task/list',
    name: 'Task.list',
    component: TaskListComponent
  },
  { 
    path: '/task/:id/edit',
    name: 'Task.edit',
    component: TaskEditComponent
  }
])

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Task.list']">Lista de tarefas</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [TaskService]
})
export class AppComponent {
  title = "Hello World!!!";  
}