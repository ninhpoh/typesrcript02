import { Link } from "react-router-dom";
import { JobList } from "./JobList";

export default function TaskList() {
  return (
    <div>
      <h2>Danh sách công việc</h2>
      <ul>
        {JobList.map((job) => (
          <li key={job.id}>
            <strong>{job.title}</strong>
            <br />
            <Link to={`/tasks/${job.id}`}>Xem chi tiết</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}