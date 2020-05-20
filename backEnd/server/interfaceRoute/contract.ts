import {IUser} from "./user";
import {ITask} from "./task";
import {IWorker} from "./worker";

export interface IContract {
  id ?: string;
  date : string;
  user : IUser;
  worker : IWorker;
  task: ITask;
}
