import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface toDoList {
  id: string;
  title: string;
  img: string;
  date: string;
  status: boolean;
}

function Body() {
  const [toDoList, setToDoList] = useState<toDoList[]>([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filter = params.get("filter");

    axios
      .get("http://localhost:3000/student")
      .then((res) => {
        let data = res.data;
        if (filter === "published") {
          data = data.filter((item: toDoList) => item.status === true);
        } else if (filter === "draft") {
          data = data.filter((item: toDoList) => item.status === false);
        }
        setToDoList(data);
      })
      .catch((err) => console.error("Lỗi khi gọi API:", err));
  }, [location.search]);

  const handleToggleStatus = (id: string, currentStatus: boolean) => {
    const updatedStatus = !currentStatus;

    axios
      .patch(`http://localhost:3000/student/${id}`, { status: updatedStatus })
      .then(() => {
        // Cập nhật lại danh sách sau khi thay đổi
        setToDoList((prevList) =>
          prevList.map((item) =>
            item.id === id ? { ...item, status: updatedStatus } : item
          )
        );
      })
      .catch((err) => console.error("Lỗi khi cập nhật trạng thái:", err));
  };

  return (
    <div>
      <table className="border-stone-400 table-auto" style={{ width: "100%" }}>
        <thead className=" bg-stone-500 text-amber-50">
          <tr>
            <th
              className="border-2 border-x-stone-400 p-3"
              style={{ width: "50px" }}
            >
              STT
            </th>
            <th
              className="border-2 border-x-stone-400"
              style={{ width: "600px" }}
            >
              Tieu de
            </th>
            <th
              className="border-2 border-x-stone-400"
              style={{ width: "350px" }}
            >
              Hinh anh
            </th>
            <th className="border-2 border-x-stone-400">Ngay dang</th>
            <th className="border-2 border-x-stone-400">Trang thai</th>
            <th className="border-2 border-x-stone-400">Chuc nang</th>
          </tr>
        </thead>
        <tbody>
          {toDoList.map((item) => (
            <tr>
              <td className="border-2 border-x-stone-400 text-center">
                {item.id}
              </td>
              <td className="border-2 border-x-stone-400 pl-3">{item.title}</td>
              <td className="border-2 flex justify-center border-x-stone-400 pl-3">
                <img
                  src={item.img}
                  className="rounded-full m-1"
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td className="border-2 border-x-stone-400 pl-3">{item.date}</td>
              <td className="border-2 border-x-stone-400 pl-3">
                {item.status ? (
                  <div
                    className=" border-1 rounded-md border-green-500 text-green-500 p-1"
                    style={{ display: "inline" }}
                  >
                    <span>Dang xuat ban</span>
                  </div>
                ) : (
                  <div
                    className="border-1 rounded-md border-red-500 text-red-500 p-1"
                    style={{ display: "inline" }}
                  >
                    <span>chua xuat ban</span>
                  </div>
                )}
              </td>
              <td className="border-2 border-x-stone-400 pl-3">
                <div className="">
                  <button
                    className="border-1 rounded-md border-green-500 text-green-500 m-1 p-1"
                    onClick={() => handleToggleStatus(item.id, item.status)}
                  >
                    Chỉnh
                  </button>
                  <button className="border-1 rounded-md border-amber-400 text-amber-400 m-1 p-1">
                    Edit
                  </button>
                  <button className="border-1 rounded-md border-red-500 text-red-500 m-1 p-1">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Body;
