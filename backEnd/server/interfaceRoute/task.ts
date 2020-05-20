import {IUser} from "./user";
import {IStatus} from "./status";

export interface ITask {
  id : string;
  title : string;
  body : string;
  user: IUser;
  category : IStatus;
}
