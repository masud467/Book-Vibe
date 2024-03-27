import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Root from "../Layout/Root/Root";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ListedBook from "../Pages/ListedBook/ListedBook";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";
import MostReadedBooks from "../Pages/MostReadedBooks/MostReadedBooks";
import Pricing from "../Pages/Pricing/Pricing";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
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
          path:'/pages-to-read',
          element:<PagesToRead></PagesToRead>
        },
        {
          path:'/price-plan',
          element:<Pricing></Pricing>
        },
        {
          path:'/most-readed-books',
          element:<MostReadedBooks></MostReadedBooks>
        },
        
        {
          path:'/book-details/:id',
          element:<BookDetails></BookDetails>
        }
      ]
    },
  ]);

  export default router;