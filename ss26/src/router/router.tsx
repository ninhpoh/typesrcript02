import { createBrowserRouter } from "react-router-dom";
import Product from "../pages/Product";
import Student from "../pages/Student03-04";
import Student02 from "../pages/Student02";

export const router = createBrowserRouter([
    {path: "/student", element:<Student></Student>},
    {path: "/student02/:name", element:<Student02></Student02>},
    {path: "/product/:id", element: <Product></Product> },

]); 