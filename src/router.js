import Home from "./components/Home";
import ProductSpec from "./components/Products/ProductSpec";
import Webtoon from "./components/Webtoon";
import ComicBook from "./components/ComicBook";
import Login from "./components/Login";
import ProductUpload from "./components/ProductUpload";
import Banner_1 from "./components/Banner_1";
import Banner_2 from "./components/Banner_2";

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
    path: "/banner_1",
    element: <Banner_1 />,
  },
  {
    route: "Banners",
    path: "/banner_2",
    element: <Banner_2 />,
  },
];
