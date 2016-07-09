import { Task } from './task';
import { TASKS } from './task-data';


export class TaskService{
  getTasks():Task[]{
      return TASKS;
  }
}
