import {
    Request,
    Response
} from "express";
import router from './routes'

const http = require('http');
const finalhandler = require('finalhandler');

function app(req: Request, res: Response) {
    router(req, res, finalhandler(req, res));
}

const port = 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`server on the port : ${port}`);
});
