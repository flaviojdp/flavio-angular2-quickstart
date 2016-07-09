import { Task } from './task';
import { TASKS } from './task-data';


export class TaskService{
  getTasks():Task[]{
      return TASKS;
  }
  
  getTask(id: number | string){
    return this.getTasks().filter(function(task){
      return task.id == id;
    }) [0];
  }
}
