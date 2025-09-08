import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import { Sticky } from "../App";

interface BodyProps {
  notes: Sticky[];
  deleteNote: (id: string) => void;
}

function ContentOfBody({ notes, deleteNote }: BodyProps) {
  return (
    <div
      style={{ width: "350px" }}
      className="bg-slate-950 text-stone-50 flex flex-col items-center justify-center rounded-b-lg"
    >
      {notes.length === 0 ? (
        <h1 className="text-stone-50 mt-5 pb-5">Chưa có nội dung nào</h1>
      ) : (
        notes.map((note) => (
          <div
            key={note.id}
            style={{ width: "300px" }}
            className="flex justify-between p-3 bg-slate-700 mt-2 mb-1 border-2 border-slate-950 border-t-amber-400"
          >
            <h4>{note.content}</h4>
            <div>
              <EditOutlined />
              <Popconfirm
                title="Xóa ghi chú"
                description="Bạn có chắc muốn xóa ghi chú này?"
                onConfirm={() => {
                  deleteNote(note.id);
                }}
                okText="Có"
                cancelText="Không"
              >
                <Button
                  style={{ border: "none", color: "white" }}
                  className="!bg-slate-700 pl-2"
                >
                  <DeleteOutlined />
                </Button>
              </Popconfirm>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ContentOfBody;
