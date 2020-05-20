import workerController from '../controllers/WorkerController'

const Router = require('router');

const router = Router();

router.get('/', workerController.getAll);

router.post('/', workerController.add);

router.put('/:id', workerController.editById);

router.delete('/:id', workerController.deleteById);

export default router;
