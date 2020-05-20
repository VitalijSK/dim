import * as bodyParser from 'body-parser';
import routerUser from './users';
import routerRequest from './request';
import routerLanguage from './language';
import routerComment from './contract';
import routerCategory from './category';
import routerTask from './task';
import routerWorker from './worker';
import routerContract from './contract';

const Router = require('router');
const cors = require('cors');

const jsonParser = bodyParser.json()

const router = Router();

router.use(cors());
router.use(jsonParser);

router.use('/api/users', routerUser);
router.use('/api/requests', routerRequest);
router.use('/api/worker', routerWorker);
router.use('/api/language', routerLanguage);
router.use('/api/comments', routerComment);
router.use('/api/categories', routerCategory);
router.use('/api/contracts', routerContract);
router.use('/api/task', routerTask);

export default router;


