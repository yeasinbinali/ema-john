import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Cart from "../../pages/Cart/Cart";
import Inventory from "../../pages/Inventory/Inventory";
import Shop from "../../pages/Shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: '/inventory',
        element: <Inventory></Inventory>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      }
    ],
  },
]);
