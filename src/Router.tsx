import {
  RouterProvider,
  createBrowserRouter,
  useRoutes,
} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Todo from "./pages/Todo";
import NoMatch from "./pages/NoMatch";

// 토큰 검사 함수
const isAuthenticated = () => {
  // 쿠키에서 토큰 검사 결과 return
  return null;
};

const Router = () => {
  // 각 라우팅될 페이지를 모아놓습니다
  const routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/signup", element: <Signup /> },
    { path: "/signin", element: <Signin /> },
    { path: "/todo", element: <Todo /> },
    { path: "*", element: <NoMatch /> },
  ]);
  const pathname = window.location.pathname;
  //특정 페이지 접근시 토큰 검사를 실시합니다

  // switch(pathname){
  //   case "/todo"
  // }

  return <RouterProvider router={routes} />;
};

export default Router;
