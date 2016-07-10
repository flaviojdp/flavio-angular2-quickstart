import { Task } from './task';
import { TASKS } from './task-data';
import { Http, Response } from '@angular/http';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class TaskService{
 
  //constructor( @Inject( Http ) http: Http){}
  constructor( private http: Http){}
  //getTasks():Promise<Task[]>{
  //getTasks():Promise<Task[]>{
  getTasks():any{
      var promise = new Promise(function(resolve, reject){
        window.setInterval(function(){
          resolve( TASKS );
        },3000);
        
      });
      //return promise;
      
      return this.http.get('http://localhost:99/tasks').toPromise().then( x => x.json()._embedded.tasks );
      /*return this.http.get('http://localhost:99/clientes').toPromise().then( function( dados ){
        //console.log( "Ok...", dados.json()._embedded.clientes);
        return dados.json()._embedded.clientes;
      } );*/
        //console.log( x );
      //return promise;
      //return this.http.get('http://localhost:99/clientes').toPromise().then( response => response.json() );
  }
  
  getTask(id: number | string){
    return TASKS.filter(function(task){
      return task.id == id;
    }) [0];
  }
}
