import "./App.css";
import TaskItem from "./components/TaskList"
import TaskForm from "./components/TaskManager";
import FilterControls from "./components/ToolBar";

function App() {
  return (
    <div className=" flex justify-center items-center">
      <div className=" bg-indigo-100 rounded-md p-3 text-center" style={{ width: "700px" }}>
        <h1 className=" text-[50px] mb-3">Task manager</h1>
        <TaskForm/>
        <div>
          <FilterControls/>
          <TaskItem/>
        </div>
      </div>
    </div>
  );
}

export default App;
