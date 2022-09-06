import React from "react";
import { 
    BrowserRouter, 
    useRoutes 

} from 'react-router-dom';

import Landing from "./pages/Landing";
import TeacherForm from "./pages/TeacherForm";
import TeacherList from "./pages/TeacherList";

const App = () =>{
    let routes = useRoutes( [
        { path: "/", element: <Landing /> },
        { path: "/study", element: <TeacherList /> },
        { path: "/give-classes", element: <TeacherForm /> },
    ] )
    return routes;
}

const RoutesApp = () =>{
    return(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
    
}

export default RoutesApp;