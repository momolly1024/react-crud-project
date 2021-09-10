import React, { useState, useContext, useEffect, useRef } from "react";
import { TaskListContext } from "../../Context";

const TaskForm = () => {
    const inputRef = useRef(null);
    const { addTask, clearList, editTask, editItem } =
        useContext(TaskListContext);
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editItem) {
            addTask(title);
            setTitle("");
        } else {
            editTask(title, editItem.id);
        }
    };

    const handleChange = (e) => setTitle(e.target.value);

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title);
            inputRef.current.focus();
        } else {
            setTitle("");
        }
    }, [editItem]);

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                placeholder="Add Task..."
                value={title}
                onChange={handleChange}
                required
                className="task-input"
                ref={inputRef}
            />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    {editItem ? "Edit Task" : "Add Task"}
                </button>
                <button
                    type="button"
                    className="btn clear-btn"
                    onClick={clearList}
                >
                    Clear All
                </button>
            </div>
        </form>
    );
};

export default TaskForm;
