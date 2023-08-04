import Swal from "sweetalert2";
import store from "../../redux/store/store.js";
import {RemoveTodo} from "../../redux/state/todo/todoSlice.js";

export const TodoDeleteAlert = (i) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to delete your task!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            store.dispatch(RemoveTodo(i))
            Swal.fire(
                'Deleted!',
                'Your task has been deleted.',
                'success'
            )
        }
    })
}