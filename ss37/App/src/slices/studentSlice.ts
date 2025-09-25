import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Student {
    id: number;
    name: string;
    age: number;
    grade: string
}

interface StudentState {
    students: Student[];
    loading: boolean;
    error: string | null;
}

const initialState: StudentState = {
    students: [],
    loading: false,
    error: null,
};

export const fetchStudent = createAsyncThunk('students/fetchStudent', async () => {
    const response = await fetch('http://localhost:3000/students');
    return await response.json();
});

export const addStudent = createAsyncThunk(
  'students/addStudent',
  async (student: { name: string; age: string;  grade:string}) => {
    const response = await fetch('http://localhost:3000/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...student,
        completed: false,
      }),
    });
    return await response.json();
  }
);

export const deleteStudent = createAsyncThunk(
  'students/deleteStudent',
  async (id: number) => {
    await fetch(`http://localhost:3000/students/${id}`, {
      method: 'DELETE',
    });
    return id;
  }
);


const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Xử lý fetchStudent
            .addCase(fetchStudent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchStudent.fulfilled, (state, action) => {
                state.loading = false;
                state.students = action.payload;
            })
            .addCase(fetchStudent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Lỗi không xác định';
            })
    }
})
export default studentSlice.reducer