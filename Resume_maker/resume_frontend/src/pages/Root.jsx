import React from "react";
import { Outlet } from "react-router";

function Root() {
    return <div>
            <h1>Hello world!</h1>
            <p>This is a paragraph</p>

            <Outlet />
        </div>;
    
}
export default Root;