import React from 'react'
import { IconButton, Typography, Paper, Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export default function TaskItem({ task, onDelete, onStatusChange }) {
  return (
    <Paper sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box>
        <Typography variant="h6">{task.title}</Typography>
        {task.description && (
          <Typography variant="body2">{task.description}</Typography>
        )}
        <Typography variant="caption" color={task.status === 'Completed' ? 'green' : 'orange'}>
          {task.status}
        </Typography>
      </Box>
      <Box>
        <IconButton onClick={() => onStatusChange(task)}><CheckCircleIcon /></IconButton>
        <IconButton onClick={() => onDelete(task)}><DeleteIcon /></IconButton>
      </Box>
    </Paper>
  )
}
