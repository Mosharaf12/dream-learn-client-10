import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");


export const routers = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                loader:()=> fetch(`http://localhost:5000/courses`),
                element: <Home></Home>
            },
            {
                path:'/',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            }
        ]
    }

])