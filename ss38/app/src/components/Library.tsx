import { Button } from "@mui/material";
import { useState } from "react";
import LibraryToolBar from "./LibraryToolBar";
import LibraryList from "./LibraryList";
import LibraryForm from "./LibraryAddForm";

export default function Library() {
  const [showForm, setShowForm] = useState(false);

  const handleAddClick = () => {
    setShowForm(true);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">📚 Library Manager</h1>

        <div className="flex gap-4 mb-4">
          <Button variant="contained" color="primary" onClick={handleAddClick}>
            Add Book
          </Button>
        </div>
        <LibraryToolBar/>
        <LibraryList/>
        {showForm && <LibraryForm onClose={handleCloseForm} />}
      </div>
    </div>
  );
}
