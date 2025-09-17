import { useEffect, useState } from "react";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";

interface ToDoItem {
  id: string;
  toDo: string;
  isDone: boolean;
}

function IsDone() {
  const [doneList, setDoneList] = useState<ToDoItem[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/toDoList")
      .then((res) => {
        const completed = res.data.filter((item: ToDoItem) => item.isDone);
        setDoneList(completed);
      })
      .catch((err) => console.error("Lỗi khi gọi API:", err));
  }, []);

  const handleDelete = (id: string) => {
  axios
    .delete(`http://localhost:3000/toDoList/${id}`)
    .then(() => {
      setDoneList((prev) => prev.filter((item) => item.id !== id));
    })
    .catch(() => {
      console.error("Lỗi khi xóa công việc");
    });
};

  return (
    <div>
      {doneList.map((item) => (
        <div
          key={item.id}
          className="bg-stone-100 p-2 shadow-md rounded-md mb-3"
          style={{ width: "350px" }}
        >
          <div className="flex justify-between">
            <div className="flex justify-baseline" style={{ width: "200px" }}>
              <input type="checkbox" checked={item.isDone} readOnly />
              <p className={`pl-2 ${item.isDone ? "line-through text-gray-500" : ""}`}>
                {item.toDo}
              </p>
            </div>
            <div className="flex justify-around" style={{ width: "50px" }}>
              <EditOutlined />
              <Popconfirm
                title="Xóa công việc?"
                description="Bạn có chắc muốn xóa công việc này không?"
                onConfirm={() => handleDelete(item.id)}
                onCancel={() => console.log("Đã hủy")}
                okText="Yes"
                cancelText="No"
              >
                <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
              </Popconfirm>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IsDone;