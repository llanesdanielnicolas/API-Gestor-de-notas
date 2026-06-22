const router = require('express').Router();

const tareaController = require('../controllers/tarea.controller');
const authMiddleware = require('../middlewares/auth.middlewares');

router.use(authMiddleware);

router.get('/', tareaController.obtenerTodas);

router.post('/', tareaController.crear);

router.get('/categoria/:id', tareaController.obtenerTareasPorCategoria);


module.exports = router;
