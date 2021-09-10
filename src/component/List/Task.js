import React, { useContext } from "react";
import { TaskListContext } from "../../Context";

const Task = ({ task }) => {
    const { findItem, removeTask, completeTask } = useContext(TaskListContext);

    return (
        <li className="list-item">
            <span>{task.title} </span>
            <div>
                <button
                    type="button"
                    title="Edit"
                    className="btn-edit task-btn"
                    onClick={() => findItem(task.id)}
                >
                    <svg fill="#eee" className="icon" viewBox="0 0 24 24">
                        <path d="M20.719 7.031l-1.828 1.828-3.75-3.75 1.828-1.828q0.281-0.281 0.703-0.281t0.703 0.281l2.344 2.344q0.281 0.281 0.281 0.703t-0.281 0.703zM3 17.25l11.063-11.063 3.75 3.75-11.063 11.063h-3.75v-3.75z" />
                    </svg>
                </button>
                <button
                    type="button"
                    title="Delete"
                    className="btn-delete task-btn"
                    onClick={() => removeTask(task.id)}
                >
                    <svg fill="#eee" className="icon" viewBox="0 0 24 24">
                        <path d="M18.984 3.984v2.016h-13.969v-2.016h3.469l1.031-0.984h4.969l1.031 0.984h3.469zM6 18.984v-12h12v12q0 0.797-0.609 1.406t-1.406 0.609h-7.969q-0.797 0-1.406-0.609t-0.609-1.406z" />
                    </svg>
                </button>
                <button
                    type="button"
                    title="Complete"
                    className="btn-done task-btn"
                    onClick={() => completeTask(!task.complete, task.id)}
                >
                    <svg
                        fill="#eee"
                        className={`icon ${task.complete ? "complete" : ""}`}
                        viewBox="0 0 24 24"
                    >
                        <path d="M0.422 13.406l1.406-1.406 5.578 5.578-1.406 1.406zM22.219 5.578l1.453 1.406-12 12-5.625-5.578 1.453-1.406 4.172 4.172zM18 6.984l-6.328 6.375-1.406-1.406 6.328-6.375z" />
                    </svg>
                </button>
            </div>
        </li>
    );
};

export default Task;
