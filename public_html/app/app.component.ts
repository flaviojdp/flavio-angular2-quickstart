import { Component } from '@angular/core';

var TASKS : Task[] = [
  { id : 1, name : "Trabalhar"},
  { id : 2, name : "Lavar pratos"},
  { id : 3, name : "Tirar poeira"},
  { id : 4, name : "Compras no supermercado"},
  { id : 5, name : "Cuidar da criança"},
  { id : 6, name : "Jogar víde game"},
  { id : 7, name : "Almoçar"},
  { id : 8, name : "Jantar"},
  { id : 9, name : "Fazer exercício"},
  { id : 10, name : "Pagar Contas"}
];
export class Task{
  id : number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <ul>
      <li *ngFor="let t of tasks" (click)="onClick( t )">{{t.id}} - {{t.name}}</li>
    </ul>
    <div *ngIf="selectedTask">
      <input type="text" [(ngModel)]="selectedTask.name" />
    </div>
  `
})
export class AppComponent {
  title = "Hello World!!!";
  tasks : Task[] = TASKS;
  selectedTask : Task;

  onClick( task ){
    this.selectedTask = task;
  }
}
