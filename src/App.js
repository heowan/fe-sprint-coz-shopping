import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { GlobalStyle } from "./styled/globalStyle";
import { getAllProducts } from "./api/productDataApi";
import Main from "./pages/main";
import ProductList from "./pages/productList";
import Bookmark from "./pages/bookmark";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const [productList, setProductList] = useState([]);
  const [bookmarkList, setBookmarkList] = useState([]);

  useEffect(() => {
    getAllProducts().then((result) => {
      setProductList(result);
    });
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              productList={productList}
              setProductList={setProductList}
              bookmarkList={bookmarkList}
              setBookmarkList={setBookmarkList}
            />
          }
        />
        <Route path="/products/list" element={<ProductList />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
