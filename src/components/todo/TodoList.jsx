import {useSelector, useDispatch} from "react-redux";
import {TodoDeleteAlert} from "./TodoDeleteAlert.js";
import {ToggleComplete} from "../../redux/state/todo/todoSlice.js";

const TodoList = () => {
    const todoItems = useSelector((state) => state.todo.value);
    const dispatch = useDispatch();

    if (todoItems.length === 0) {
        return <p className="text-center fs-5 text-dark-emphasis">No Task Available to do now.</p>;
    }

    return (
        <div>
            <table className="table table-bordered table-striped">
                <thead>
                <tr className='text-center'>
                    <th>ID</th>
                    <th>Task</th>
                    <th>Action</th>
                    <th>Complete</th>
                </tr>
                </thead>
                <tbody>
                {
                    todoItems.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td className="col-1 text-center">{item.id}</td>
                                <td className="col-8">{item.task}</td>
                                <td className='text-center col-2'>
                                    <button
                                        onClick={() => {
                                            TodoDeleteAlert(item.id);
                                        }}
                                        className='btn btn-sm btn-danger ms-2'
                                    >
                                        Remove
                                    </button>
                                </td>
                                <td className="col-1 text-center">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={item.completed}
                                        onChange={() => dispatch(ToggleComplete(item.id))}
                                    />
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
