import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import CheckOut from "../../pages/CheckOut/CheckOut";
import Courses from "../../pages/Courses/Courses";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register/Register";
import PrivateRoute from "../PirvateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");


export const routers = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
            },
            {
                path:'/course/:id',
                loader:({params})=> fetch(`http://localhost:5000/category/${params.id}`),
                element:<Courses></Courses>

            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/checkout/:id',
                loader:({params})=> fetch(`http://localhost:5000/category/${params.id}`),
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            }
        ]
    }

])