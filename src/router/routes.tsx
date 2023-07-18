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
import EditBook from "../pages/EditBook";
import WishLists from "../pages/WishList";
import ReadingLists from "../pages/ReadingList";

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
    path: "/editBook/:id",
    element: (
      <PrivateRoute>
        <EditBook />
      </PrivateRoute>
    ),
  },
  {
    path: "/bookDetails/:id",
    element: <BookDetails />,
  },
  {
    path: "/wishList",
    element: (
      <PrivateRoute>
        <WishLists />
      </PrivateRoute>
    ),
  },
  {
    path: "/readingList",
    element: (
      <PrivateRoute>
        <ReadingLists />
      </PrivateRoute>
    ),
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
