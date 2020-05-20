import MainFactory from './MainModel';
import { IWorker } from 'server/interfaceRoute/worker';

class WorkerModel extends MainFactory<IWorker> {
  constructor() {
    super('worker');
  }
}
export default new WorkerModel();
