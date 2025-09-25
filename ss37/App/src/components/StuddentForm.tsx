import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { useState } from "react";
import type { AppDispatch } from "../stores";
import { useDispatch } from "react-redux";
import { addStudent } from "../slices/studentSlice";

export default function StudentForm({ onClose }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState<"CNTT-5" | "CNTT-36" | "CNTT-7">(
    "CNTT-36"
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    dispatch(addStudent({ name: name, grade, age: age }));
    setAge('');
    setName('');
    window.location.reload();
  };

  return (
    <Dialog fullWidth maxWidth="sm" open={true} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add Student</DialogTitle>
        <DialogContent className="flex flex-col gap-[15px] space-y-4 !pt-2">
          <TextField label="Name" fullWidth required autoFocus value={name} onChange={(e)=>setName(e.target.value)}/>
          <TextField
            label="Age"
            type="number"
            value={age}
            onChange={(e)=> setAge(String(e.target.value))}
            fullWidth
            inputProps={{ min: 1 }}
            className="mb-10"
          />
          <Select label="Grade" fullWidth value={grade} onChange={(e) => setGrade(e.target.value as "CNTT-5" | "CNTT-36" | "CNTT-7")}>
            <MenuItem value="CNTT-5">CNTT-5</MenuItem>
            <MenuItem value="CNTT-6">CNTT-6</MenuItem>
            <MenuItem value="CNTT-7">CNTT-7</MenuItem>
          </Select>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
