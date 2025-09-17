import { useEffect, useState } from "react";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";

interface toDoList {
  id: string;
  toDo: string;
  isDone: boolean;
}

function AllList() {
  const [toDoList, setToDoList] = useState<toDoList[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/toDoList")
      .then((res) => setToDoList(res.data))
      .catch((err) => console.error("Lỗi khi gọi API:", err));
  }, []);

  const handleDelete = (id: string) => {
  axios
    .delete(`http://localhost:3000/toDoList/${id}`)
    .then(() => {
      setToDoList((prev) => prev.filter((item) => item.id !== id));
    })
    .catch(() => {
      console.error("Lỗi khi xóa công việc");
    });
};

  const handleToggle = (item: ToDoItem) => {
    axios
      .patch(`http://localhost:3000/toDoList/${item.id}`, {
        isDone: !item.isDone,
      })
      .then(() => {
        setToDoList((prev) =>
          prev.map((todo) =>
            todo.id === item.id ? { ...todo, isDone: !todo.isDone } : todo
          )
        );
      })
      .catch(() => {
        console.error("Lỗi khi cập nhật trạng thái");
      });
  };

  return (
    <div>
      {toDoList.map((item) => (
        <div
          key={item.id}
          className="bg-stone-100 p-2 shadow-md rounded-md mb-3"
          style={{ width: "350px" }}
        >
          <div className="flex justify-between">
            <div className="flex justify-baseline" style={{ width: "200px" }}>
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={() => handleToggle(item)}
              />
              <p
                className={`pl-2 ${
                  item.isDone ? "line-through text-gray-500" : ""
                }`}
              >
                {item.toDo}
              </p>
            </div>
            <div className="flex justify-around" style={{ width: "50px" }}>
              <EditOutlined />
              <Popconfirm
                title="Xóa công việc?"
                description="Bạn có chắc muốn xóa công việc này không?"
                onConfirm={() => handleDelete(item.id)}
                onCancel={() => console.log("")}
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

export default AllList;
