import { useParams, useNavigate } from "react-router-dom";
import { JobList } from "./JobList";

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = JobList.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div>
        <h2>Oh no! Not found</h2>
        <p>Trang bạn tìm không tồn tại.</p>
        <button onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
}