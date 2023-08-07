import {  RouterProvider, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Todo from "./pages/Todo";
import NoMatch from "./pages/NoMatch";



// 토큰 검사 함수
const isAuthenticated = () => {
 // 쿠키에서 토큰 검사 결과 return
  return  null;
};

const routes = [
  { path: "/", element: <Home /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  { path: "/todo", element: <Todo /> },
  { path: "*", element: <NoMatch /> },
];

const Router = () => {
  // useRoutes 훅을 사용하여 라우트를 처리합니다.
  const element = useRoutes(routes);
  const pathname = window.location.pathname

  switch(pathname){
    case "/todo"
  }

  // 사용자가 로그인하지 않은 경우 "/signin" 페이지로 리다이렉트
  if (!isAuthenticated()) {
    // navigate("/signin");
    return null;
  }

//   return <RouterProvider router={element} />;
};

export default Router;
