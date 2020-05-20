import MainFactory from './MainModel';
import { createQueryPromise } from '../database/query';
import { IContract } from 'server/interfaceRoute/contract';

class ContractModel extends MainFactory<IContract> {
    constructor() {
        super('contract');
    }
    getAll(): Promise<any> {
      return createQueryPromise(sql);
    }

    getById(id: string) {
      return createQueryPromise(`${sql} WHERE contract.id = ${id}`);
    }
    getAllById(id : string) {
        return createQueryPromise(`${sqlRequest}${id}`);
    }
}
export default new ContractModel();

const sql = `SELECT contract.*, user.name AS user_name, worker.name AS worker_name, task.title AS task_title
FROM contract JOIN user ON contract.user_id = user.id 
JOIN worker ON contract.worker_id = worker.id
JOIN task ON contract.task_id = task.id`;

const sqlRequest = `SELECT comment.id, comment.text AS body, comment.date, user.name AS username
FROM comment JOIN request ON comment.request_id = request.id 
JOIN user ON comment.user_id = user.id
WHERE comment.request_id = `;
