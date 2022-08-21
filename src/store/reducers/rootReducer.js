import {TASK_ADD, TASK_DELETE, TASK_EDITABLE, TASK_STATUS} from "../actions/actionsTodo";

function rootReducer(state = {
  counter: 0,
  taskList: [
    {
      id: 0,
      text: 'Тут текст таски',
      complete: false,
      editNow: false,
    },
  ]
}, action) {
  switch (action.type) {
    case "INCREMENT":
      return {...state, counter: state.counter + 1};

    case "DECREMENT":
      return {...state, counter: state.counter - 1};

    case TASK_ADD: {
      const getId = () => {
        let key = Number(Math.random().toString().substring(2, 3)); // gen id
        if (state.taskList.some(item => item.id === key)) return getId(); // unique
        else return key;
      }
      return {
        ...state,
        taskList: [
          ...state.taskList,
          {
            id: getId(),
            text: action.text,
            complete: false,
            editNow: false,
          }
        ]
      }
    }

    case TASK_DELETE: {
      return {
        ...state,
        taskList: state.taskList.filter(item => item.id !== action.payload)
      }
    }

    case TASK_EDITABLE: {
      return {
       ...state,
        taskList: state.taskList.map(item => (item.id !== action.payload) ?
          Object.assign({}, item, {editNow: false}) :
          Object.assign({}, item, {editNow: !item.editNow, complete: false})
        )
      }
    }

    case TASK_STATUS: {
      return {
        ...state,
        taskList: state.taskList.map(item => (item.id === action.payload) ?
          Object.assign({}, item, {editNow: false, complete: !item.complete}) :
          item,
        )
      }
    }

    default:
      return state;
  }
}

export default rootReducer