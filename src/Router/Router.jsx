import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Root from "../Layout/Root/Root";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ListedBook from "../Pages/ListedBook/ListedBook";

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
          path:'/listed-books',
          element: <ListedBook></ListedBook>,
          loader: ()=> fetch('../data.json')
        },
        {
          path:'/read-books',
          element:<h1>read booooooks.....</h1>
        },
        
        {
          path:'/book-details/:id',
          element:<BookDetails></BookDetails>
        }
      ]
    },
  ]);

  export default router;