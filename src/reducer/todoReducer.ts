import { Todo } from "../types/todoTypes";

interface ActionType {
  type: string;
  todoList?: Todo[];
  todo?: Todo;
  targetId?: number;
}
export const todoReducer = (state: Todo[], action: ActionType): Todo[] => {
  switch (action.type) {
    case "INIT":
      if (action.todoList) {
        return action.todoList;
      }
    case "CREATE":
      if (action.todo) {
        return [...state, action.todo];
      }
    case "UPDATE":
      if (action.targetId && action.todo) {
        return state.map((item) =>
          item.id === action.targetId ? action.todo! : item
        );
      }
    case "DELETE":
      if (action.targetId) {
        return state.filter((item) => item.id !== action.targetId);
      }
    default:
      return state;
  }
};
