import { IUser } from "./user";
import { IStatus } from "./status";

export interface IRequest {
  id : string;
  title : string;
  body : string;
  user: IUser;
  status : IStatus;
  data : string;
}
