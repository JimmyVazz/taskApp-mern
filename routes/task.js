const express = require('express');
const router  = express.Router();
const Task = require("../models/Task")

//READ TASK
router.get('/', async(req, res, next) => {
  const tasks = await Task.find()
  res.json(tasks)
});
//CREATE TASK
router.post('/', async(req, res) => {
  // console.log(req.body)
  const { title, description } = req.body
  const task = new Task({title, description})
  await task.save()
  res.json({
    status: "Task Saved"
  })
})
//UPDATE TASK
router.put('/:id', async(req, res) => {
  const { title, description} = req.body
  const newTask = {title, description}
  await Task.findByIdAndUpdate(req.params.id, newTask)
  res.json({
    status: "task updated "
  })
})
//DELETE TASK
router.delete('/:id', async(req, res) => {
  await Task.findByIdAndRemove(req.params.id)
  res.json({
    status: "task deleted"
  })
})

//GET UNIQUE TASK
router.get('/:id', async(req, res) => {
  const task = await Task.findById(req.params.id)
  res.json(task)
})

module.exports = router;
