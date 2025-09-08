import './App.css';
import ContentOfBody from './components/Body';
import Head from './components/Header';
import { useState } from 'react';

export interface Sticky {
  id: string;
  content: string;
}

function App() {
  const [notes, setNotes] = useState<Sticky[]>([]);

  function addNote(content: string) {
    const newNote: Sticky = {
      id: crypto.randomUUID(),
      content,
    };
    setNotes([...notes, newNote]);
  }

  function deleteNote(id: string) {
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <div style={{ width: "350px" }}>
      <Head addNote={addNote} />
      <ContentOfBody notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;