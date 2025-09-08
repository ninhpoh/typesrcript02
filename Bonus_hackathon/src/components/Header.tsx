import { SaveOutlined } from "@ant-design/icons";
import { useState, type ChangeEvent } from "react";

interface HeaderProps {
  addNote: (content: string) => void;
}

function Head({ addNote }: HeaderProps) {
  const [input, setInput] = useState<string>("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleClick() {
    if (input.trim() !== "") {
      addNote(input);
      setInput("");
    }
  }

  return (
    <div className="rounded-t-lg bg-amber-400 flex flex-col items-center">
      <div className="flex flex-row p-3 justify-between" style={{ width: "300px" }}>
        <h1 className="text-[25px]">Sticky Note</h1>
        <SaveOutlined onClick={handleClick} />
      </div>
      <div className="pb-3">
        <input
          name="inputContent"
          type="text"
          className="bg-slate-950 text-stone-50 rounded"
          style={{ width: "300px", height: "100px" }}
          onChange={handleChange}
          value={input}
        />
      </div>
      {input.trim() === "" && (
        <div>
          <h1 className="text-red-500 mb-3">Nội dung không được để trống</h1>
        </div>
      )}
    </div>
  );
}

export default Head;