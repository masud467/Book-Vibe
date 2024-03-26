import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Root from "../Layout/Root/Root";
import BookDetails from "../Pages/BookDetails/BookDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/book-details/:id',
          element:<BookDetails></BookDetails>
        }
      ]
    },
  ]);

  export default router;