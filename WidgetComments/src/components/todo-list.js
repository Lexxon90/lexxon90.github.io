import React from 'react';
import UserCommentItem from "./comment-Item";

const TodoLict = (props) => {
    const { todos, toggleTodo } = props; //todos = this.props.todos
    return (

                todos.map(todo => {
                    return(

                        <UserCommentItem
                            key={todo.id}
                            name={todo.name}
                            comment={todo.comment}
                            time={todo.time}
                            toggleTodo={toggleTodo.bind(this, todo.id)}
                        />
                    )
                })

    );
}

export default TodoLict