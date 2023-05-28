import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styled/globalStyle";
import Main from "./pages/main";
import ProductList from "./pages/productList";
import Bookmark from "./pages/bookmark";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [isChangeBookmark, setIsChangeBookmark] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isChangeBookmark={isChangeBookmark}
              setIsChangeBookmark={setIsChangeBookmark}
            />
          }
        />
        <Route
          path="/products/list"
          element={
            <ProductList
              isChangeBookmark={isChangeBookmark}
              setIsChangeBookmark={setIsChangeBookmark}
            />
          }
        />
        <Route
          path="/bookmark"
          element={
            <Bookmark
              isChangeBookmark={isChangeBookmark}
              setIsChangeBookmark={setIsChangeBookmark}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
