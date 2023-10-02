const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').patch(updateTask).delete(deleteTask).get(getTaskById);

module.exports = router;
