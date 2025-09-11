import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./TaskList";
import TaskDetail from "./TaskDetail";

function Exercise03() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
      </Routes>
    </Router>
  );
}

export default Exercise03;