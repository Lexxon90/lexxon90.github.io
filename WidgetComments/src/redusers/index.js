const todos = (state, action) => {

    switch (action.type) {
        case 'ADD_TODO':
            let arr = [...state, { id: action.id, name: action.name, comment: action.comment, time: action.time }];
            localStorage.user = JSON.stringify(arr);
            let counter = localStorage.getItem("counter");
            counter++;
            localStorage.setItem("counter", counter);
            return arr
            
            
        case 'TOGGLE_TODO':
            let arrId = state.findIndex(item=>item.id==action.id);
            console.log(arrId);
            state.splice(arrId,1);
            localStorage.user = JSON.stringify(state);
            return state = JSON.parse(localStorage.user)
        default:
            return state;
    }
}

export default todos;