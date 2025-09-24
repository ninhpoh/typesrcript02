import { useState } from 'react';
import {
  Button, FormControl, InputLabel, MenuItem,
  Select, TextField
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../stores/index';
import { addTask } from '../slices/taskSlice';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Medium');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(addTask({ taskName: title, priority }));
    setTitle('');
    setPriority('Medium');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-md">
      <TextField
        label="Công việc mới"
        variant="outlined"
        size="small"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1"
      />
      <FormControl size="small" className="w-36">
        <InputLabel>Ưu tiên</InputLabel>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'Low' | 'Medium' | 'High')}
          label="Ưu tiên"
        >
          <MenuItem value="low">Thấp</MenuItem>
          <MenuItem value="medium">Trung bình</MenuItem>
          <MenuItem value="high">Cao</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Thêm
      </Button>
    </form>
  );
}

export default TaskForm;