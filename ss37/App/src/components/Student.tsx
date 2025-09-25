import { Button } from "@mui/material";
import StudentToolBar from "./StudentToolBar";
import StuddentForm from "./StuddentForm";
import StudentList from "./StudentList";
import { useState } from "react";
export default function Student() {
  const [showForm, setShowForm] = useState(false);

  const handleAddClick = () => {
    setShowForm(true);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">🎓 Student Manager</h1>

      <div className="flex gap-4 mb-4">
        <Button variant="contained" color="primary" onClick={handleAddClick}>
          Add Student
        </Button>
      </div>
      <StudentToolBar />
      <StudentList />
      {showForm && <StuddentForm onClose={handleCloseForm} />}
    </div>
  );
}
