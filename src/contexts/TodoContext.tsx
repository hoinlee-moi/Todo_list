import { createContext, useEffect, useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer";
import { Todo } from "../types/todoTypes";
import { createTodo, deleteTodo, getTodoList, updateTodo } from "../util/api";

interface TodoContextProviderProps {
  children: JSX.Element;
}

interface TodoContextType {
  todoList: Todo[];
  onCreateTodo: (todo: string) => void;
  onUpdateTodo: (todoItem: Todo) => void;
  onCompletedTodo: (todoItem: Todo) => void;
  onDeleteTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType>({
  todoList: [],
  onCreateTodo: (todo) => {},
  onUpdateTodo: (todoItem) => {},
  onCompletedTodo: (todoItem) => {},
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
    if (response?.status === 200)
      dispatch({ type: "INIT", todoList: response.data });
  };
  // 새로운 todo 추가
  const onCreateTodo = async (todo: string) => {
    const response = await createTodo(todo);
    if (response?.status === 201)
      dispatch({ type: "CREATE", todoItem: response.data });
  };
  // todo업데이트
  const onUpdateTodo = async (todoItem: Todo) => {
    const response = await updateTodo(todoItem);
    if (response?.status === 200)
      dispatch({ type: "UPDATE", todoItem: response.data });
  };
  const onCompletedTodo = async (todoItem: Todo) => {
    const response = await updateTodo(todoItem);
    if (response?.status === 200)
      dispatch({
        type: "COMPLETED",
        targetId: todoItem.id,
        completed: todoItem.isCompleted,
      });
  };
  const onDeleteTodo = async (id: number) => {
    const response = await deleteTodo(id);
    if (response?.status === 204) dispatch({ type: "DELETE", targetId: id });
  };

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
