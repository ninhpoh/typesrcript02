import {
    Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function LibraryToolBar() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4 items-center">
      <TextField label="Tìm theo tên" className="flex-1" size="small" />
      <FormControl size="small" className="w-40">
        <InputLabel>Category</InputLabel>
        <Select label="Category">
          <MenuItem value="all">Tất cả</MenuItem>
          <MenuItem>Novel</MenuItem>
          <MenuItem>Scinece</MenuItem>
          <MenuItem>History</MenuItem>
        </Select>
      </FormControl>
      <FormControl size="small" className="w-36">
        <InputLabel>Sắp xếp</InputLabel>
        <Select
          label="Sắp xếp"
        >
          <MenuItem value="name_asc">Name A → Z</MenuItem>
          <MenuItem value="name_desc">Name Z → A</MenuItem>
          <MenuItem value="age_asc">Year ↑</MenuItem>
          <MenuItem value="age_desc">Year ↓</MenuItem>
        </Select>
      </FormControl>

      <Button  variant="outlined" className="ml-auto">
        Clear
      </Button>
    </div>
  )
}
