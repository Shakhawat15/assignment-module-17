import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AddTodo} from "../../redux/state/todo/todoSlice.js";
import {hideMessage, showMessage} from "../../redux/state/message/messageSlice.js";

const CreateTodo = () => {
    const dispatch = useDispatch();
    const taskInput = useRef();
    const showMessageText = useSelector((state) => state.message.text);

    const handleAddTask = () => {
        const taskValue = taskInput.current.value.trim();
        if (taskValue !== "") {
            dispatch(AddTodo(taskValue));
            taskInput.current.value = "";
            dispatch(hideMessage()); // Hide the message if there was a previous error
        } else {
            dispatch(showMessage("Please enter your task then click 'ADD TASK' button.")); // Show the error message
        }
    };
    return (
        <div>
            <div className="input-group mb-3">
                <input ref={taskInput} type="text"
                       className={showMessageText ? "form-control redBorder" : "form-control"}
                       placeholder="Enter your task" required/>
                <button onClick={handleAddTask} className="btn btn-info fw-bold text-uppercase" type="button">Add Task
                </button>
            </div>
            {showMessageText && <p className="text-danger">{showMessageText}</p>}
        </div>
    );
};

export default CreateTodo;