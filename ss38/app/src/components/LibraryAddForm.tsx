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
import { addBooks } from "../slices/librarySlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../stores";

export default function LibraryForm({ onClose }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState<"Novel" | "Science" | "History">(
    "History"
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addBooks({ title: title, year: year, category, author: author }));

    window.location.reload();
  };
  return (
    <Dialog fullWidth maxWidth="sm" open={true} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add Book</DialogTitle>
        <DialogContent className="flex flex-col gap-[15px] space-y-4 !pt-2">
          <TextField label="Title" fullWidth required autoFocus value={title} onChange={(e)=> setTitle(String(e.target.value))}/>
          <TextField label="Author" fullWidth required value={author} onChange={(e)=> setAuthor(String(e.target.value))}/>
          <TextField
            label="Year"
            type="number"
            value={year}
            fullWidth
            inputProps={{ min: 1900 }}
            className="mb-10"
            onChange={(e)=> setYear(String(e.target.value))}
          />
          <Select label="Category" fullWidth value={category} onChange={(e)=> setCategory(e.target.value)}>
            <MenuItem value="Novel">Novel</MenuItem>
            <MenuItem value="Science">Science</MenuItem>
            <MenuItem value="History">History</MenuItem>
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
