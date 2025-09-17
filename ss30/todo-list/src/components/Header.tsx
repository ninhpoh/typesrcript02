import { useState } from "react";
import axios from "axios";
import { Button, message } from "antd";

function Header() {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = () => {
    
    const newToDo = {
      id: Date.now().toString(),
      toDo: newTask,
      isDone: false,
    };

    axios
      .post("http://localhost:3000/toDoList", newToDo)
      .then(() => {
        message.success("Đã thêm công việc mới!");
        setNewTask("");
        window.location.reload();
      })
      .catch(() => {
        message.error("Lỗi khi thêm công việc");
      });
  };

  return (
    <div className="m-3 flex flex-col justify-center items-center">
      <h1>To Do List</h1>
      <div
        className="bg-stone-100 p-2 shadow-md rounded-md"
        style={{ width: "350px" }}
      >
        <input
          type="text"
          placeholder="Nhập tên công việc"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-1 rounded-md mb-2"
          style={{ width: "300px" }}
        />
        <br />
        <Button type="primary" style={{ width: "300px" }} onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Header;