import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { GlobalStyle } from "./styled/globalStyle";
import Main from "./pages/main";
import ProductList from "./pages/productList";
import Bookmark from "./pages/bookmark";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const [bookmarkList, setBookmarkList] = useState([]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
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
