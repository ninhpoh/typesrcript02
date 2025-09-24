import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, Chip, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { fetchTasks,deleteTask } from '../slices/taskSlice';
import { RootState } from '../stores/index';
import { LoadingOutlined } from '@ant-design/icons';

const TaskItem = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state: RootState) => state.tasks);
  
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) return <div> <LoadingOutlined style={{ fontSize: '100px' }}/></div>;
  if (error) return <div>Lỗi: {error}</div>;

  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm mb-2"
        >
          <div className="flex items-center gap-3">
            <Checkbox checked={task.completed} />
            <span className={task.completed ? 'line-through text-gray-400' : ''}>
              {task.taskName}
            </span>
            <Chip label={task.priority} size="small" className="ml-2" />
          </div>
          <div>
            <IconButton color="error" onClick={() => dispatch(deleteTask(task.id))}>
              <Delete />
            </IconButton>
            <IconButton color="primary">
              <Edit />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskItem;
