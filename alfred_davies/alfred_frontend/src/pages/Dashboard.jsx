import React, { useState, useEffect } from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import api from '../api/api'
import { Typography, CircularProgress, Box, Alert, Snackbar } from '@mui/material'

export default function Dashboard() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' })

  // ✅ Fetch all tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await api.get('/tasks')
      setTasks(res.data)
    } catch (err) {
      setError('Failed to fetch tasks')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchTasks() }, [])

  // ✅ Add new task
  const handleTaskAdded = (newTask) => {
    setTasks(prev => [...prev, newTask])
    setSnackbar({ open: true, message: 'Task added!', severity: 'success' })
  }

  // ✅ Delete task
  const handleDelete = async (task) => {
    if (!window.confirm(`Delete task "${task.title}"?`)) return
    try {
      await api.delete(`/tasks/${task._id}`)
      setTasks(prev => prev.filter(t => t._id !== task._id))
      setSnackbar({ open: true, message: 'Task deleted!', severity: 'success' })
    } catch (err) {
      setSnackbar({ open: true, message: 'Failed to delete task', severity: 'error' })
    }
  }

  // ✅ Update task status
  const handleStatusChange = async (task) => {
    const updatedStatus = task.status === 'Pending' ? 'Completed' : 'Pending'
    try {
      const res = await api.put(`/tasks/${task._id}`, { status: updatedStatus })
      setTasks(prev => prev.map(t => (t._id === task._id ? res.data : t)))
      setSnackbar({ open: true, message: `Marked as ${updatedStatus}`, severity: 'success' })
    } catch {
      setSnackbar({ open: true, message: 'Failed to update task', severity: 'error' })
    }
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Task Dashboard</Typography>
      <TaskForm onTaskAdded={handleTaskAdded} />

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <TaskList
          tasks={tasks}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
          onEdit={() => {}}
        />
      )}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        message={snackbar.message}
      />
    </Box>
  )
}
