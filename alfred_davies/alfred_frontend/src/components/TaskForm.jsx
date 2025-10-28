import React, { useState } from 'react'
import { TextField, Button, Box } from '@mui/material'
import api from '../api/api'

export default function TaskForm({ onTaskAdded }) {
  const [task, setTask] = useState({ title: '', description: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setTask(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!task.title.trim()) return alert('Title is required')
    try {
      const res = await api.post('/tasks', task)
      onTaskAdded(res.data)
      setTask({ title: '', description: '' })
    } catch (err) {
      console.error(err)
      alert('Failed to add task')
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <TextField
        label="Task Title"
        name="title"
        value={task.title}
        onChange={handleChange}
        required
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Description"
        name="description"
        value={task.description}
        onChange={handleChange}
        fullWidth
        multiline
        rows={2}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained">Add Task</Button>
    </Box>
  )
}
