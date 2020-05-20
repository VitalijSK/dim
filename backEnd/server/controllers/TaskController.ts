import task from '../models/Task';
import MainControllers from './MainController';
import {ITask} from "../interfaceRoute/task";

class TaskController extends MainControllers<ITask> {
  constructor() {
    super(task);
  }
};
export default new TaskController();
