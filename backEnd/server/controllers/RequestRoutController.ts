import {
  Request,
  Response
} from 'express';
import request from '../models/Request';
import MainControllers from './MainController';
import { IRequest } from 'server/interfaceRoute/request';

class RequestController extends MainControllers<IRequest> {
    constructor() {
        super(request);
    }
    async getOffer(req: Request, res: Response) {
      const requests = await request.getOffer();
      res.end(JSON.stringify(requests));
    }
    async getNew(req: Request, res: Response) {
      const requests = await request.getNew();
      res.end(JSON.stringify(requests));
    }
    async getReject(req: Request, res: Response) {
      const requests = await request.getReject();
      res.end(JSON.stringify(requests));
    }
    async getAll(req: Request, res: Response) {
      const requests = await request.getAll();
      res.end(JSON.stringify(requests));
    }
    async getById(req: Request, res: Response) {
      const requestTemp = await request.getById(req.params.id);
      res.end(JSON.stringify(requestTemp[0]));
    }
};
export default new RequestController();
