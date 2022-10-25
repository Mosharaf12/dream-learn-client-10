import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");


export const routers = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    }

])