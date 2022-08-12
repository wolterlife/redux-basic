export const TASK_ADD = "TASK_ADD";
export const TASK_DELETE = "TASK_DELETE"
export const TASK_STATUS = "TASK_STATUS"
export const TASK_EDIT = "TASK_EDIT"

export const taskAdd = (value) => {
  return {
    type: TASK_ADD,
    text: value,
  }
}

