import React from "react";

import ContextProvider from "../Context";
import TaskForm from "../component/List/TaskForm";
import TaskList from "../component/List/TaskList";

function List() {
    return (
        <ContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <div className="main">
                        <TaskForm />
                        <TaskList />
                    </div>
                </div>
            </div>
        </ContextProvider>
    );
}

export default List;
