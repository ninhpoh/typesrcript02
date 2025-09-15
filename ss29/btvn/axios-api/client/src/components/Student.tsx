import { useEffect, useState } from "react";
import axios from "axios";

function Student() {
  const [students, setStudents] = useState<student[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then((res) => {
        console.log("Danh sách sinh viên:", res.data);

        setStudents(res.data);
      })
      .catch((err) => {
        console.error("Lỗi khi lấy dữ liệu:", err);
      });
  }, []);

  function getStudentById(id) {
    axios
      .get(`http://localhost:3000/students/${id}`)
      .then((res) => {
        if (res.data && Object.keys(res.data).length > 0) {
          console.log("Thông tin sinh viên:");
          console.log(res.data); 
        } else {
          console.log("Không tìm thấy bản ghi.");
        }
      })
      .catch((err) => {
        console.error("Không tìm thấy bản ghi hoặc có lỗi:", err.message);
      });
  }

  function createStudent() {
  const student = {
    student_name: "Vũ Thị H",
    email: "vuthih@example.com",
    address: "Hải Phòng",
    phone: "0945123456",
    status: true,
    created_at: new Date().toISOString()
  };

  axios.post("http://localhost:3000/students", student)
    .then((res) => {
      console.log("Sinh viên đã được thêm:");
      console.log(res.data);
    })
    .catch((err) => {
      console.error("Lỗi khi thêm sinh viên:", err.message);
    });
}


  return (
    <>
      <h2>Danh sách sinh viên</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.student_name} - {student.email}
          </li>
        ))}
      </ul>
      {getStudentById(1)}
      {getStudentById(6)}
      <button onClick={createStudent}>Thêm sinh viên</button>
    </>
  );
}

export default Student;
