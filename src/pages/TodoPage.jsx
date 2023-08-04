import CreateTodo from "../components/todo/CreateTodo.jsx";
import TodoList from "../components/todo/TodoList.jsx";

const TodoPage = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-8 offset-2">
                    <div className="card">
                        <div className="card-header  bg-info-subtle">
                            <div className="card-title">
                                <h4 className="text-center text-uppercase fw-bolder">Todo Application</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <CreateTodo/>
                            <TodoList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;