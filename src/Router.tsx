import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Todo from "./pages/Todo";
import NoMatch from "./pages/NoMatch";

const Router = () => {
  // 각 라우팅될 페이지를 모아놓습니다
  const routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/signup", element: <Signup /> },
    { path: "/signin", element: <Signin /> },
    { path: "/todo", element: <Todo /> },
    { path: "*", element: <NoMatch /> },
  ]);

  return <RouterProvider router={routes} />;
};

export default Router;
