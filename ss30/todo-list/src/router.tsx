import { createBrowserRouter } from "react-router-dom";
import  App  from "./App";
import Home from "./pages/Home";
import AllList from "./pages/allList";
import IsDone from "./pages/isDone";
import NotDone from "./pages/notDone";

export const router = createBrowserRouter([
    {path:"/",element:<App></App>,children:[
        {path:"",element:<Home></Home>,children:[
            {path:"",element:<AllList></AllList>},
            {path:"isDone",element:<IsDone/>},
            {path:"notDone",element:<NotDone/>}
        ]}
    ]}
])