import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

import Signup from "../pages/Signup";
import Notfound from "../pages/Notfound";
import Books from "../pages/Books";
import AddBook from "../pages/AddBook";
import BookDetails from "../pages/BookDetails";
import Login from "../pages/Login";
import PrivateRoute from "./privateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/addBook",
    element: (
      <PrivateRoute>
        <AddBook />
      </PrivateRoute>
    ),
  },
  {
    path: "/bookDetails/:id",
    element: <BookDetails />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

export default routes;
