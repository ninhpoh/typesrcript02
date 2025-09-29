import axios from "axios";
import { useState, type ChangeEvent } from "react";

function UpLoad() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      console.log("Chưa chọn file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ss39_aaa");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dtdpmvyzq/image/upload",
        formData
      );
      if (response.status === 200) {
        const originalUrl = response.data.secure_url;
        const transformedUrl = originalUrl.replace(
          "/upload/",
          "/upload/w_300,h_300,c_crop,e_blur:100/"
        );

        setImageUrl(transformedUrl);
      }
    } catch (error) {
      console.error("Upload thất bại:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Ảnh đã upload (crop + làm mờ)</h2>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Ảnh đã chỉnh sửa"
          style={{ maxWidth: "300px", maxHeight: "300px", borderRadius: "8px" }}
        />
      )}
      <div style={{ marginTop: "20px" }}>
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload} style={{ marginLeft: "10px" }}>
          Upload
        </button>
      </div>
    </div>
  );
}

export default UpLoad;