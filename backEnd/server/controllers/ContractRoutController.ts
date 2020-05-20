import contract from '../models/Contract';
import {
    Request,
    Response
} from 'express';
import MainControllers from './MainController';
import { IContract } from 'server/interfaceRoute/contract';

class ContractControllers extends MainControllers<IContract> {
    constructor() {
        super(contract);
    }
    async getAllById(req: Request, res: Response) {
        const contracts = await contract.getAllById(req.params.id);
        res.end(JSON.stringify(contracts));
    }
    async add(req: Request, res: Response) {
        try {
            const result = await this.model.add(req.body);
            if (result) {
                res.end(JSON.stringify(req.body.request_id));
            }
            res.end('False');
        } catch {
            res.end('False');
        }
    };
};
export default new ContractControllers();
