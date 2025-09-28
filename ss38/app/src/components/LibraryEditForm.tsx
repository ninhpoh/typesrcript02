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
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../stores";
import { editBook } from "../slices/librarySlice";
import type { Library } from "../slices/librarySlice";

export default function LibraryEditForm({
  onClose,
  initialData,
}: {
  onClose: () => void;
  initialData: Library;
}) {
  const [title, setTitle] = useState(initialData.title);
  const [author, setAuthor] = useState(initialData.author);
  const [year, setYear] = useState(initialData.year.toString());
  const [category, setCategory] = useState<"Novel" | "Science" | "History">(initialData.category);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(editBook({ id: initialData.id, title, author, year: Number(year), category }));
    onClose();
  };

  return (
    <Dialog fullWidth maxWidth="sm" open={true} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Edit Book</DialogTitle>
        <DialogContent className="flex flex-col gap-[15px] space-y-4 !pt-2">
          <TextField label="Title" fullWidth required autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextField label="Author" fullWidth required value={author} onChange={(e) => setAuthor(e.target.value)} />
          <TextField label="Year" type="number" value={year} fullWidth inputProps={{ min: 1900 }} onChange={(e) => setYear(e.target.value)} />
          <Select fullWidth value={category} onChange={(e) => setCategory(e.target.value)}>
            <MenuItem value="Novel">Novel</MenuItem>
            <MenuItem value="Science">Science</MenuItem>
            <MenuItem value="History">History</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}