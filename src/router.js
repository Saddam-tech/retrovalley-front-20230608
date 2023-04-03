import Home from "./components/Home";
import ProductSpec from "./components/Products/ProductSpec";
import Webtoon from "./components/Webtoon";
import ComicBook from "./components/ComicBook";
import Login from "./components/Login";
import ProductUpload from "./components/ProductUpload";
import Banner from "./components/Banner";

export const router = [
  {
    route: "Login",
    path: "/login",
    element: <Login />,
  },
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
  {
    route: "ComicBook",
    path: "/comicbook/:id",
    element: <ComicBook />,
  },
  {
    route: "ProductUpload",
    path: "/product_upload",
    element: <ProductUpload />,
  },
  {
    route: "Banners",
    path: "/banners",
    element: <Banner />,
  },
];
