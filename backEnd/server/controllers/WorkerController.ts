import worker from '../models/Worker';
import MainControllers from './MainController';
import {IWorker} from "../interfaceRoute/worker";

class WorkerController extends MainControllers<IWorker> {
  constructor() {
    super(worker);
  }
};
export default new WorkerController();
