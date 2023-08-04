import Swal from "sweetalert2";

export const TodoCompleteAlert = () => {
    Swal.fire(
        'Congratulation!',
        'You complete your task!',
        'success'
    )
}