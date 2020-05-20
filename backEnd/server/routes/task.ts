import taskControllers from '../controllers/TaskController'
import requestControllers from "../controllers/RequestRoutController";

const Router = require('router');

const router = Router();

router.get('/', taskControllers.getAll);
router.get('/:id', taskControllers.getById);

router.post('/', taskControllers.add);

router.put('/:id', taskControllers.editById);

router.delete('/:id', taskControllers.deleteById);

export default router;


