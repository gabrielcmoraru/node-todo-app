import express from 'express';
import TodoRoutes from '../routes-methods/todo.js';

const router = express.Router();

// @route       GET todos
// @desc        Get all todo items
// @access      Public
router.get('/todos', TodoRoutes.getAllTodos);

// @route       POST todo
// @desc        Create new todo item
// @access      Public
router.post('/todo', TodoRoutes.createTodo);

// @route       PUT todo/:id
// @desc        Update todo
// @access      Public
router.put('/todo/:id', TodoRoutes.updateTodo);

// @route       DELETE todo/:id
// @desc        Delete todo
// @access      Public
router.delete('/todo/:id', TodoRoutes.removeTodo);

export default router;
