import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useEffect } from "react";
import type { RootState } from "../stores";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, fetchStudent } from "../slices/studentSlice";
import { Popconfirm, type PopconfirmProps } from "antd";

function StudentItem() {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector(
    (state: RootState) => state.student
  );

  useEffect(() => {
    dispatch(fetchStudent());
  }, [dispatch]);

  if (loading)
    return (
      <div>
        {" "}
        <LoadingOutlined style={{ fontSize: "100px" }} />
      </div>
    );
  if (error) return <div>Lỗi: {error}</div>;

  return (
    <>
      {students.map((student) => {
        const confirm: PopconfirmProps["onConfirm"] = () => {
          dispatch(deleteStudent(student.id));
         window.location.reload();
        };

        const cancel: PopconfirmProps["onCancel"] = () => {
          console.log("Hủy xóa học sinh:", student.name);
        };

        return (
          <Card key={student.id} className="rounded-xl shadow-sm">
            <CardContent className="flex items-center justify-between">
              <div>
                <Typography variant="h6" className="font-medium">
                  {student.name}
                </Typography>
                <Typography variant="body2" className="text-sm text-gray-500">
                  Age: {student.age} • Grade: {student.grade}
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <IconButton size="small">
                  <Edit fontSize="small" />
                </IconButton>
                <Popconfirm
                  title="Delete the student"
                  description={`Are you sure to delete ${student.name}?`}
                  onConfirm={confirm}
                  onCancel={cancel}
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

export default StudentItem;
