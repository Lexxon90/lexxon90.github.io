let nextTodoId = localStorage.counter ? localStorage.getItem("counter") : localStorage.setItem("counter", 1);

export const addTodo = (name, comment, time) => {
    return {
        type: 'ADD_TODO',
        id: localStorage.getItem("counter"),
        name,
        comment,
        time
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}