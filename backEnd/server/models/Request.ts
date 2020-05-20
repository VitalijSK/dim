import MainFactory from './MainModel';
import { IRequest } from 'server/interfaceRoute/request';
import { createQueryPromise } from '../database/query';

class RequestModel extends MainFactory<IRequest> {
    constructor() {
        super('request');
    }
    getAll() {
      return createQueryPromise(`${sql} WHERE request.status_id = 3`);
    }
    getById(id : string) {
      console.log('getById')
      return createQueryPromise(`${sql} WHERE request.id = ${id}`);
    }
    getNew() {
      console.log('get New')
      return createQueryPromise(`${sql} WHERE request.status_id = 0`);
    }
    getOffer() {
      return createQueryPromise(`${sql} WHERE request.status_id = 1`);
    }
    getReject() {
      return createQueryPromise(`${sql} WHERE request.status_id = 2`);
    }
}
export default new RequestModel();

const sql = `SELECT request.id, request.body , request.title, request.date, 
user.id AS user_id, user.name AS user_name, 
task.id AS task_id, task.title AS task_title 
FROM request JOIN task ON request.task_id = task.id 
JOIN user ON request.user_id = user.id`;
