const router = require('express').Router();
const categoriaController = require('../controllers/categoria.controller');

const authMiddleware = require('../middlewares/auth.middlewares');

router.use(authMiddleware);

router.post('/', categoriaController.crear);

router.get('/', categoriaController.obtenerTodas);

router.delete('/:id', categoriaController.eliminar);

module.exports = router;