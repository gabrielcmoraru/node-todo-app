import { nanoid } from 'nanoid';
import { MemoryData } from '../server.js';
import { validateUserData } from './helpers.js';

const getAllTodos = async (req, res) => {
  try {
    const payload = await MemoryData.getAllData();

    res.json(payload);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const createTodo = async (req, res) => {
  const userData = req.body;
  const userCheck = validateUserData(userData);

  if (userCheck.isValid) {
    const payload = {
      id: nanoid(),
      text: userData.text,
      done: userData.done || false,
    };

    try {
      const response = await MemoryData.addData(payload);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  } else {
    res.status(400).json({ error: userCheck.errors });
  }
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  let userData = req.body;
  const userCheck = validateUserData(userData, true);

  if (userCheck.isValid) {
    try {
      const response = await MemoryData.updateData(id, userData);
      res.json(response);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  } else {
    res.status(400).json({ error: userCheck.errors });
  }
};

const removeTodo = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await MemoryData.removeData(id);
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export default { getAllTodos, createTodo, updateTodo, removeTodo };
