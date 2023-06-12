import { HashRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Home from "./components/Home";
import IndexPage from "./components/IndexPage";
import Main from "./components/Market/Main";
import Menu from "./components/Menu";
import Products from "./components/Products/Products";
import { router } from "./router";
import NoMatch from "./components/NoMatch";
import Banner_1 from "./components/Banner_1";
import Block from "./components/Block";
const status = true;
export default function App() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@500&display=swap"
        rel="stylesheet"
      />
      <HashRouter>
        <Routes>
          {!status ? (
            <Route path="/" element={<Block />} />
          ) : (
            <>
              <Route path="/" element={<Banner_1 />} />
              <Route exact path="/home" element={<Home />}>
                <Route path="main" element={<Main />} />
                <Route path="menu" element={<Menu />} />
                <Route
                  path="category"
                  element={
                    <Category
                      pageName="카테고리"
                      main={[
                        {
                          name: "만화책",
                          path: "/home/comics",
                        },
                        {
                          name: "장난감",
                          path: "/home/products",
                        },
                        {
                          name: "SHOP",
                          path: "/home/nomatch",
                        },
                        {
                          name: "E-BOOK",
                          path: "home/nomatch",
                        },
                      ]}
                      sub={["작가", "년도", "브랜드", "국가", "설정"]}
                    />
                  }
                />
                <Route
                  path="comics"
                  element={
                    <Category
                      pageName="만화책"
                      main={[
                        {
                          name: "전체",
                          path: "/home/products",
                        },
                        {
                          name: "단행본",
                          path: "/home/products",
                        },
                        {
                          name: "연재본",
                          path: "/home/products",
                        },
                      ]}
                      sub={[]}
                    />
                  }
                />
                <Route path="products" element={<Products />} />
                <Route path="nomatch" element={<NoMatch />} />
              </Route>
              <Route path="/index" element={<IndexPage />} />
              {router.map((el, i) => (
                <Route key={i} path={el.path} element={el.element} />
              ))}
            </>
          )}
        </Routes>
      </HashRouter>
    </div>
  );
}
