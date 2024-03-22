import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Education from "../Components/Education/Education";
import Contact from "../Components/Contact/Contact";
import Project from "../Components/Project/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {
            path:'/home',
            element:<Home/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/skill',
            element:<Skills/>
        },
        {
            path:'/education',
            element:<Education/>
        },
        {
            path:'/project',
            element:<Project/>

        },
        {
            path:'/contact',
            element:<Contact/>
        }
    ]
  },
]);

export default router;
