import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Kiểu dữ liệu cho một task
export interface Task {
  id: number;
  taskName: string;
  completed: boolean;
  priority: string;
}

// Trạng thái ban đầu
interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};


export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('http://localhost:3000/todo');
  return await response.json();
});


export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task: { taskName: string; priority: string }) => {
    const response = await fetch('http://localhost:3000/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...task,
        completed: false,
      }),
    });
    return await response.json();
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id: number) => {
    await fetch(`http://localhost:3000/todo/${id}`, {
      method: 'DELETE',
    });
    return id;
  }
);


const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Xử lý fetchTasks
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Lỗi không xác định';
      })

      // Xử lý addTask
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })

      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
})
  },
});

export default taskSlice.reducer;