import React from 'react';
import time from './time.js';

const AddTodo = (props) => {
    const { addTodo }= props; 
    let newUsersName;
    let newUsersComment;
    return (
        <form className="contaner-new-comment">
            <div className="text">Введите комментарий</div>
            <div className="comment">
                <input 
                    className="name" 
                    name="text" 
                    placeholder="Имя" 
                    type="text"
                    onChange = {ev => {
                        newUsersName = ev.target.value
                    }}
            />
            <textarea 
                className="textarea" 
                name="textarea" 
                placeholder="Сообщение..."
                onChange = {ev => {
                    newUsersComment = ev.target.value
                }}
            >
            </textarea>
            <button 
                type="submit" 
                className="btn btn-add"
                onClick={(ev)=>{
                    addTodo(newUsersName, newUsersComment, time());
                }}
            >
                Добавить
            </button>
            </div>
        </form>
    )
}

export default AddTodo