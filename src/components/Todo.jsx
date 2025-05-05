import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({ task, toggleComplete, deleteToDo, editToDo, openTask }) => {
    return (
        <div className="Todo" key={task.id}>
            <p className={`${task.completed ? 'completed' : ""}`} onClick={() => openTask(task.id)}>
                {task.task} - <span className={`priority-${task.priority}`}>{task.priority}</span>
            </p>

            <div>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                />
                <span className="checkmark"></span>

                <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={(e) => {
                        e.stopPropagation();
                        editToDo(task.id);
                    }}
                />

                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={(e) => {
                        e.stopPropagation();
                        deleteToDo(task.id);
                    }}
                />
            </div>
        </div>
    )
}