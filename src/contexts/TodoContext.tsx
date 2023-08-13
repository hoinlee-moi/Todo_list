import { createContext, useReducer } from "react";
import { todoReducer } from "../reducer/TodoReducer";
import { Todo } from "../types/todoTypes";

interface TodoContextProviderProps {
  children: JSX.Element;
}

interface TodoContextType {
  todoList: Todo[];
  getTodoList: () => void;
  onCreateTodo: (todo: string) => void;
  onUpdateTodo: (id: number, todo: string) => void;
  onCompletedTodo: (id: number, completed: boolean) => void;
  onDeleteTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType>({
  todoList: [],
  getTodoList: () => {},
  onCreateTodo: (todo) => {},
  onUpdateTodo: (id, todo) => {},
  onCompletedTodo: (id, completed) => {},
  onDeleteTodo: (id) => {},
});

const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [todoList, dispatch] = useReducer(todoReducer, []);
  const getTodoList = () => {};
  const onCreateTodo = (todo: string) => {};
  const onUpdateTodo = (id: number, todo: string) => {};
  const onCompletedTodo = (id: number, completed: boolean) => {};
  const onDeleteTodo = (id: number) => {};

  return (
    <TodoContext.Provider
      value={{
        todoList,
        getTodoList,
        onCreateTodo,
        onUpdateTodo,
        onCompletedTodo,
        onDeleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
