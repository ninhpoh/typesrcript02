import { useEffect, useState } from "react";

function ListUser() {
  const [user, setUser] = useState<Products[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Dữ liệu sản phẩm:", data);
        setUser(data);
      })
      .catch((error) => {
        console.error("Lỗi:", error.message);
      });
  }, []);

  return (
    <div>
        {/* mở rộng tự thân */}
      <p>Danh sách sản phẩm:</p>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            {user.product_name} - {user.price}₫
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListUser;
