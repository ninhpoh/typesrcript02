import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import type { AppDispatch, RootState } from "../stores";
import { useEffect, useState } from "react";
import { Popconfirm, type PopconfirmProps } from "antd";
import { deleteLifetchLibrary, fetchLibrary } from "../slices/librarySlice";
import LibraryEditForm from "./LibraryEditForm";
import type { Library } from "../slices/librarySlice";

export default function LibraryItem() {
  const dispatch = useDispatch<AppDispatch>();
  const { books, loading, error } = useSelector((state: RootState) => state.books);
  const [editingBook, setEditingBook] = useState<Library | null>(null);

  useEffect(() => {
    dispatch(fetchLibrary());
  }, [dispatch]);

  if (loading) return <LoadingOutlined style={{ fontSize: "100px" }} />;
  if (error) return <div>Lỗi: {error}</div>;

  return (
    <>
      {editingBook && (
        <LibraryEditForm
          initialData={editingBook}
          onClose={() => setEditingBook(null)}
        />
      )}

      {books.map((book) => {
        const confirm: PopconfirmProps["onConfirm"] = () => {
          dispatch(deleteLifetchLibrary(book.id));
        };

        return (
          <Card key={book.id} className="rounded-xl shadow-sm">
            <CardContent className="flex justify-between items-center">
              <div>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="body2" className="text-gray-600">
                  {book.author} • {book.year} • {book.category}
                </Typography>
              </div>
              <div className="flex gap-2">
                <IconButton size="small" onClick={() => setEditingBook(book)}>
                  <Edit fontSize="small" />
                </IconButton>
                <Popconfirm
                  title="Delete the Book"
                  description={`Are you sure to delete ${book.title}?`}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <IconButton size="small" aria-label="delete">
                    <Delete fontSize="small" />
                  </IconButton>
                </Popconfirm>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}