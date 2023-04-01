import Home from "./components/Home";
import ProductSpec from "./components/Products/ProductSpec";

export const router = [
  {
    route: "Home",
    path: "/",
    element: <Home />,
  },
  {
    route: "ProductSpec",
    path: "/products/product/:id",
    element: <ProductSpec />,
  },
];
