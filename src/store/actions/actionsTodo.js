export const TASK_ADD = "TASK_ADD";
export const TASK_DELETE = "TASK_DELETE"
export const TASK_STATUS = "TASK_STATUS"
export const TASK_EDITABLE = "TASK_EDITABLE"
export const TASK_CHANGE = "TASK_CHANGE"

export const taskAdd = value => {
  return {
    type: TASK_ADD,
    text: value,
  }
}

export const taskDell = id => {
  return {
    type: TASK_DELETE,
    payload: id,
  }
}

export const taskEditable = id => {
  return {
    type: TASK_EDITABLE,
    payload: id,
  }
}

  export const taskStatus = id => {
    return {
      type: TASK_STATUS,
      payload: id,
    }
}