import Home from "./components/Home";
import ProductSpec from "./components/Products/ProductSpec";
import Webtoon from "./components/Webtoon";

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
  {
    route: "Webtoon",
    path: "/webtoon",
    element: <Webtoon />,
  },
];
