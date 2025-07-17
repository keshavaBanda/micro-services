const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth');

const {
    getAllTodos,
    getTodoById,
    addTodo,
    updateTodo,
    deleteTodo,
    deleteAllTodos
} = require('../controllers/todoController')

router.use(verifyToken)

router.delete('/all-delete', deleteAllTodos)
router.get('/', getAllTodos)
router.post('/', addTodo)
router.delete('/:id', deleteTodo)
router.get('/:id', getTodoById)
router.patch('/:id', updateTodo)

module.exports = router;