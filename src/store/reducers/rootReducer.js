import {TASK_ADD} from "../actions/actionsTodo";

function rootReducer(state = {
  counter: 0,
  taskList: [
    {
      id: 0,
      text: 'Тут текст таски',
      status: false,
    },
  ]

}, action) {
  switch (action.type) {
    case "INCREMENT": return {counter: state.counter + 1};
    case "DECREMENT": return {counter: state.counter - 1};
    case TASK_ADD:  {
      console.log(action.text)
      return state;
    }
    default: return state;
  }
}

export default rootReducer