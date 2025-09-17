import { NavLink, Outlet } from "react-router-dom";

function RenderList() {
    return ( 
        <div className=" m-3 flex flex-col justify-center items-center">
            <nav className=" bg-stone-100 p-2 shadow-md rounded-md flex justify-around mb-3" style={{width:"350px"}}>
                <div><NavLink to={""} className={({ isActive }) => isActive ? " bg-red-500 text-amber-50 pr-4 pl-4" : ""}>All</NavLink></div>
                <div><NavLink to={"isDone"} className={({ isActive }) => isActive ? " bg-red-500 text-amber-50 pr-0.5 pl-0.5" : ""}>Done</NavLink></div>
                <div><NavLink to={"notDone"} className={({ isActive }) => isActive ? " bg-red-500 text-amber-50 pr-0.5 pl-0.5" : ""}>Progress</NavLink></div>
            </nav> 
            <Outlet></Outlet>
        </div> 
    );
}

export default RenderList;