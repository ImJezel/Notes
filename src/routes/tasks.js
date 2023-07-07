const express = require ('express');
const TaskController = require ('../controllers/TaskController');

const router = express.Router();

router.get('/home', TaskController.home);
router.get('/tasks', TaskController.index);
router.get('/create', TaskController.create);
router.post('/create', TaskController.store);
router.post('/tasks/eliminar', TaskController.eliminar);
router.get('/tasks/editar/:id', TaskController.editar);
router.post('/tasks/editar/:id', TaskController.actualizar);
router.get('/tasks/ver/:id', TaskController.ver);

module.exports = router;