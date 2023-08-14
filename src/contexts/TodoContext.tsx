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
export const DUMMY = [
  {
    id: 1,
    todo: "todo2",
    isCompleted: false,
    userId: 1,
  },
  {
    id: 2,
    todo: "asdfasdfasdfasdfasdf",
    isCompleted: false,
    userId: 1,
  },
  {
    id: 3,
    todo: "asdfasdfasdfasdgasdgasvasdvbg",
    isCompleted: true,
    userId: 1,
  },
  {
    id: 4,
    todo: "ㅇ라오ㅜ라아ㅜ라우린우리나울ㄴㅇㄹ",
    isCompleted: true,
    userId: 1,
  },
  {
    id: 5,
    todo: "오늘은장보고 밥먹고",
    isCompleted: false,
    userId: 1,
  },
  {
    id: 6,
    todo: "투두리슨트느느다만드라으라일",
    isCompleted: true,
    userId: 1,
  },
];
const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [todoList, dispatch] = useReducer(todoReducer, DUMMY);

  useEffect(() => {
    // initTodoList();
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
    // const response = await createTodo(todo);
    // if (response?.status === 201) {
    //   dispatch({ type: "CREATE", todo: response.data });
    // }
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
