import {
    Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function StudentToolBar() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4 items-center">
      <TextField label="Tìm theo tên" className="flex-1" size="small" />
      <FormControl size="small" className="w-40">
        <InputLabel>Grade</InputLabel>
        <Select label="Grade">
          <MenuItem value="all">Tất cả</MenuItem>
          <MenuItem>CNTT-5</MenuItem>
          <MenuItem>CNTT-6</MenuItem>
          <MenuItem>CNTT-7</MenuItem>
        </Select>
      </FormControl>
      <FormControl size="small" className="w-36">
        <InputLabel>Sắp xếp</InputLabel>
        <Select
          label="Sắp xếp"
        >
          <MenuItem value="name_asc">Name A → Z</MenuItem>
          <MenuItem value="name_desc">Name Z → A</MenuItem>
          <MenuItem value="age_asc">Age ↑</MenuItem>
          <MenuItem value="age_desc">Age ↓</MenuItem>
        </Select>
      </FormControl>

      <Button  variant="outlined" className="ml-auto">
        Clear
      </Button>
    </div>
  );
}
