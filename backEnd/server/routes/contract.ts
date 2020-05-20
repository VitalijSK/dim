import commentControllers from '../controllers/ContractRoutController'

const Router = require('router');

const router = Router();

router.get('/', commentControllers.getAll);
router.get('/all/:id', commentControllers.getAllById);

router.delete('/:id', commentControllers.deleteById);

router.post('/', commentControllers.add);

export default router;


