import { Button, Input, Space } from "antd";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Student() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (keyword.trim()) {
      navigate(`/student?studentName=${encodeURIComponent(keyword)}`);
    }
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const studentName = queryParams.get("studentName");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tìm kiếm sinh viên</h2>
      <Space.Compact style={{ width: "100%" }}>
        <Input
          placeholder="Nhập từ khóa tìm kiếm"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button type="primary" onClick={handleSearch}>
          Tìm kiếm
        </Button>
      </Space.Compact>
      <p>{studentName}</p>
    </div>
  );
}

export default Student;
