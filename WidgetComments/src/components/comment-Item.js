import React from "react";

const UserCommentItem = (props) => {
    return(
        <div className="contaner-new-add-comment">
            <div className="comment">
                <div className="name-sirname">
                    {props.name}
                </div>
                <div className="time">
                    {props.time}
                </div>
                <div className="textcomment">
                    {props.comment}
                </div>
                <button 
                    type="submit" 
                    className="btn btn-delete"
                    onClick={props.toggleTodo}
                >Удалить</button>
            </div>
        </div>
    )
}


export default UserCommentItem;