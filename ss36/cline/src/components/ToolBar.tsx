import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

import React from 'react';

const FilterControls: React.FC= () => {
  return (
    <div className="mt-[15px] flex gap-4 items-center bg-white p-4 rounded-2xl shadow-md mb-4">
      <FormControl size="small" className="w-40">
        <InputLabel>Trạng thái</InputLabel>
        <Select
          value={status}
          label="Trạng thái"
        >
          <MenuItem value="all">Tất cả</MenuItem>
          <MenuItem value="completed">Hoàn thành</MenuItem>
          <MenuItem value="active">Chưa hoàn thành</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small" className="w-40">
        <InputLabel>Ưu tiên</InputLabel>
        <Select
        //   value={priority}
          label="Ưu tiên"
        >
          <MenuItem value="all">Tất cả</MenuItem>
          <MenuItem value="low">Thấp</MenuItem>
          <MenuItem value="medium">Trung bình</MenuItem>
          <MenuItem value="high">Cao</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Tìm kiếm"
        variant="outlined"
        size="small"
        // value={search}
        // onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1"
      />
    </div>
  );
};

export default FilterControls;