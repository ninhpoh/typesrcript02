import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../store/actions";
import { Button, MenuItem, Select, TextField } from "@mui/material";

const StudentForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    gender: "",
    birthday: "",
    hometown: "",
    address: "",
  });

  const handleChange = (e: FormChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    dispatch(addStudent(formData));
    setFormData({
      id: "",
      name: "",
      age: "",
      gender: "",
      birthday: "",
      hometown: "",
      address: "",
    });
  };

  return (
    <div className="w-1/3 p-4 border rounded-xl shadow">
      <h2 className="font-semibold mb-4">Thông Tin Sinh Viên</h2>
      <div className="flex flex-col gap-4">
        <TextField
          label="Mã sinh viên"
          name="id"
          value={formData.id}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Tên sinh viên"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Tuổi"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          fullWidth
        />
        <Select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="Nam">Nam</MenuItem>
          <MenuItem value="Nữ">Nữ</MenuItem>
        </Select>
        <TextField
          type="date"
          label="Ngày sinh"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Nơi sinh"
          name="hometown"
          value={formData.hometown}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Địa chỉ"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default StudentForm;
