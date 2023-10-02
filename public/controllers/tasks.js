const getAllTasks = (req, res) => {
  res.send('getAllTasks');
};
const createTask = (req, res) => {
  res.json(req.body);
};
const updateTask = (req, res) => {
  res.send('updateTask');
};
const deleteTask = (req, res) => {
  res.send('deleteTask');
};
const getTaskById = (req, res) => {
  res.send('getTaskById');
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
};
