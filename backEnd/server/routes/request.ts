import requestControllers from '../controllers/RequestRoutController'

const Router = require('router');

const router = Router();
router.get('/reject', requestControllers.getReject);
router.get('/offer', requestControllers.getOffer);
router.get('/new', requestControllers.getNew);
router.get('/:id', requestControllers.getById);
router.get('/', requestControllers.getAll);

router.post('/', requestControllers.add);

router.put('/:id', requestControllers.editById);

router.delete('/:id', requestControllers.deleteById);

export default router;


