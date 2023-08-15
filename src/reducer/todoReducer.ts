import { Todo } from "../types/todoTypes";

interface ActionType {
  type: string;
  todoList?: Todo[];
  todoItem?: Todo;
  targetId?: number;
  completed?: boolean;
}
export const todoReducer = (state: Todo[], action: ActionType): Todo[] => {
  switch (action.type) {
    case "INIT":
      if (action.todoList) {
        return action.todoList;
      }
      break;
    case "CREATE":
      if (action.todoItem) {
        return [...state, action.todoItem];
      }
      break;
    case "UPDATE":
      if (action.todoItem) {
        return state.map((item) =>
          item.id === action.todoItem!.id ? action.todoItem! : item
        );
      }
      break;
    case "COMPLETED":
      if (action.targetId) {
        return state.map((item) =>
          item.id === action.targetId
            ? { ...item, ["isCompleted"]: action.completed! }
            : item
        );
      }
      break;
    case "DELETE":
      if (action.targetId) {
        return state.filter((item) => item.id !== action.targetId);
      }
      break;
  }
  return state;
};
