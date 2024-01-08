// reducers/todos.js
const initialState = {
    list: [],
  };
  
  const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          list: [...state.list, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default todosReducer;
  