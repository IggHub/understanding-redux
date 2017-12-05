import {combineReducers} from 'redux';

const todos = (state = [], action) => {
  console.log("invoking todos reducer. All states: ", state);

  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    default:
      return state
  }
}

const reducer = combineReducers({
  todos: todos
})

export default reducer;
