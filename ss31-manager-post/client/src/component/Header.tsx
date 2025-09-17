import { Button, Modal } from "antd";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const newPost = {
      title,
      img: image,
      content,
      date: new Date().toISOString(),
      status: true,
    };

    console.log("Bài viết mới:", newPost);
    setTitle("");
    setImage("");
    setContent("");
    hideModal();

    axios
      .post("http://localhost:3000/student", newPost)
      .then(() => console.log("Đã thêm bài viết"))
      .catch((err) => console.error("Lỗi:", err));
  };

  const navigate = useNavigate();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    navigate(`/?filter=${value}`);
  };

  return (
    <div className="flex justify-between p-2 " style={{ width: "100%" }}>
        <div>
          <input
            type="text"
            placeholder="Tìm kiếm bài viết"
            className="mr-2 rounded-md border-2 border-amber-950"
          />
          <select
            name="filter"
            id="choice"
            onChange={handleFilterChange}
            className="border-2 border-amber-950 rounded-md"
          >
            <option value="">Lọc bài viết</option>
            <option value="published">Đã xuất</option>
            <option value="draft">Chưa xuất</option>
          </select>
        </div>

        <div>
          <Button type="primary" onClick={showModal}>
            Thêm bài viết
          </Button>
        </div>

      <Modal
        title="Thêm mới công việc"
        open={open}
        onCancel={hideModal}
        footer={null}
      >
        <p>Tên công việc</p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-md border-1 border-amber-950 p-2"
          style={{ width: "100%", height: "30px" }}
        />

        <p className="mt-3">Hình ảnh</p>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="rounded-md border-1 border-amber-950 p-2"
          style={{ width: "100%", height: "30px" }}
        />

        <p className="mt-3">Nội dung</p>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: "100%", height: "200px" }}
          className="rounded-md border-1 border-amber-950 p-2"
        />

        <div className="flex justify-end mt-4" style={{ width: "100%" }}>
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Header;
