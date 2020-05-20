import MainFactory from './MainModel';
import { ITask } from 'server/interfaceRoute/task';
import { createQueryPromise } from '../database/query';

class TaskModel extends MainFactory<ITask> {
  constructor() {
    super('task');
  }
  getAll() {
    return createQueryPromise(sql);
  }
  getById(id : string) {
    return createQueryPromise(`${sql} WHERE task.id = ${id}`);
  }
}
export default new TaskModel();

const sql = `SELECT task.id, task.body, task.date, task.title,
user.id AS user_id, user.name AS user_name, 
status.id AS status_id, status.title AS status_title, 
category.id AS category_id, category.title AS category_title 
FROM task JOIN category ON task.category_id = category.id 
JOIN user ON task.user_id = user.id
JOIN status ON task.status_id = status.id`;
