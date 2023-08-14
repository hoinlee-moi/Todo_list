import { createContext, useEffect, useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer";
import { Todo } from "../types/todoTypes";
import { createTodo, getTodoList } from "../util/api";

interface TodoContextProviderProps {
  children: JSX.Element;
}

interface TodoContextType {
  todoList: Todo[];
  onCreateTodo: (todo: string) => void;
  onUpdateTodo: (id: number, todo: string) => void;
  onCompletedTodo: (id: number, completed: boolean) => void;
  onDeleteTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType>({
  todoList: [],
  onCreateTodo: (todo) => {},
  onUpdateTodo: (id, todo) => {},
  onCompletedTodo: (id, completed) => {},
  onDeleteTodo: (id) => {},
});

const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [todoList, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    initTodoList();
  }, []);
  // todo 데이터 불러오기
  const initTodoList = async () => {
    const response = await getTodoList();
    if (response?.status === 200) {
      dispatch({ type: "INIT", todoList: response.data });
    }
  };
  // 새로운 todo 추가
  const onCreateTodo = async (todo: string) => {
    const response = await createTodo(todo);
    if (response?.status === 201) {
      dispatch({ type: "CREATE", todo: response.data });
    }
  };
  const onUpdateTodo = (id: number, todo: string) => {};
  const onCompletedTodo = (id: number, completed: boolean) => {};
  const onDeleteTodo = (id: number) => {};

  return (
    <TodoContext.Provider
      value={{
        todoList,
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
