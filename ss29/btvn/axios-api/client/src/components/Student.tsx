import { useEffect, useState } from "react";
import axios from "axios";

function Student() {
  const [students, setStudents] = useState<student[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/students").then((res) => {
      setStudents(res.data);
      console.log("Danh sách sinh viên:", res.data);
      getStudentById(1);
    });
  }, []);

  function getStudentById(id: number) {
    axios.get(`http://localhost:3000/students/${id}`).then((res) => {
      if (res.data) {
        console.log("Thông tin sinh viên:");
        console.log(res.data);
      } else {
        console.log("Không tìm thấy bản ghi.");
      }
    });
  }

  function createStudent() {
    const student = {
      student_name: "Vũ Thị H",
      email: "vuthih@example.com",
      address: "Hải Phòng",
      phone: "0945123456",
      status: true,
      created_at: new Date().toISOString(),
    };

    axios
      .post("http://localhost:3000/students", student)
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
      <button onClick={createStudent}>Thêm sinh viên</button>
    </>
  );
}

export default Student;
